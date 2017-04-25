'use strict'
module.exports = (sequelize, DataTypes) => {
    const Method = sequelize.define('Method', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE
        }

    }, {
            paranoid: true,
            underscored: true
        });
    return Method;
};