'use strict'
module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define('Test', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
    }, {
            paranoid: true,
            underscored: true
        });
    return Test;
};