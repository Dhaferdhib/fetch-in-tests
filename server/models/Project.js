'use strict'
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creation_date: {
            type: DataTypes.DATE
        }

    }, {
            paranoid: true,
            underscored: true
        });
    return Project;
};