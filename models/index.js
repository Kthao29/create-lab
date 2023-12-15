const User = require('./User');
const Comment = require('./Comment');
const Project = require('./Project');

User.hasMany(Project, {
    foreignKey: 'user_id',
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Project, {
    foreignKey: 'project_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Project.hasMany(Comment, {
    foreignKey: 'project_id',
});

module.exports = { User, Comment, Project };