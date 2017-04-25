'use strict'
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        login: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        password_hash: DataTypes.STRING,
        password: {
            type: DataTypes.VIRTUAL,
            set: function (val) {
                this.setDataValue('password', val); // Remember to set the data value, otherwise it won't be validated
                this.setDataValue('password_hash', this.salt + val);
            },
            validate: {
                isLongEnough: function (val) {
                    if (val.length < 7) {
                        throw new Error("Please choose a longer password")
                    }
                }
            }
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,

    }, {
            paranoid: true,
            underscored: true
        });
    return User;
};
