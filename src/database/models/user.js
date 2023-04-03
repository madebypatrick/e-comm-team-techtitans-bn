'use strict';
const { Model } = require('sequelize');
const speakeasy = require('speakeasy');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            fullname: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            mfa_secret: DataTypes.STRING,
            role: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
        },
        {
            sequelize,
            modelName: 'User',
            getterMethods: {
                mfa_token() {
                  if (this.mfa_secret) {
                    return speakeasy.totp({
                      secret: this.mfa_secret,
                      encoding: 'base32',
                    });
                  }
                  return null;
                },
              },
        },
    );
    return User;
};