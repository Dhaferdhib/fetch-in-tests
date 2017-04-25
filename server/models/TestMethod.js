'use strict'
module.exports = (sequelize, DataTypes) => {
    const TestMethod = sequelize.define('TestMethod', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        }
    }, {
            paranoid: true,
            underscored: true
        });
    return TestMethod;
};