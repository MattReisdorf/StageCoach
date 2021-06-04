const { Model, DataTypes } = require('sequelize');
const sequelize = require('../server');
const bcrypt = require('bcrypt');

class Venue extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Venue.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                allowNull: false
            }
        },
        username: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                isAlphanumeric: true,
                max: 20,
                min: 4,
                notEmpty: true,
                allowNull: false
            }
        },
        password: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                max: 32,
                min: 8,
                allowNull: false
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                allowNull: false,
                unique: true
            }
        },
        address: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                is: /^[a-zA-Z.'-]+/g,
                allowNull: false
            }
        },
        city: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                is: /^[a-zA-Z.'-]+/g,
                allowNull: false
            }
        },
        state: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                is: /^[a-zA-Z.'-]+/g,
                allowNull: false
            }
        },
        venue_name: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                max: 100,
                allowNull: false,
                unique: true
            }
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true,
            validate: {
                max: 1000
            }
        },
        all_ages: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        eighteen_plus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        twentyone_plus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        has_food: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        has_bar: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        external_website: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        external_social_facebook: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        external_social_instagram: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        external_social_twitter: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        contact_title: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true,
            validate: {
                isAlpha: true
            }
        },
        contact_name: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true,
            validate: {
                isAlpha: true
            }
        },
        contact_number: {
            type: DataTypes.INTEGER,
            allowNull: true,
            trim: true,
            validate: {
                isNumeric: true,
                min: 10,
                max: 10
            }
        },
        contact_email: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true,
            validate: {
                isEmail: true
            }
        },
        specs_capacity: {
            type: DataTypes.INTEGER,
            allowNull: true,
            trim: true,
            validate: {
                isNumeric: true
            }
        },
        specs_description: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true,
            validate: {
                max: 1000
            }
        },
        image_one: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        image_two: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        image_three: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        image_four: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        },
        image_five: {
            type: DataTypes.STRING,
            allowNull: true,
            trim: true
        }
    },
    {
        hooks: {
            beforeCreate: async (newArtistData) => {
                newArtistData.password = await bcrypt.hash(newArtistData.password, 10);
                return newArtistData;
            },
            beforeUpdate: async (updatedArtistData) => {
                updatedArtistData.password = await bcrypt.hash(updatedArtistData.password, 10);
                return updatedArtistData;
            },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Username Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Email Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Password Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //City Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //State Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //venue Name Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Bio Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Contact_title Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Contact_name Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Contact_number Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //Contact_email Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //specs_capacity Validation + applicable Err
            // },
            // validationFailed: async (newArtistData, options, error) => {
            //     //specs_description Validation + applicable Err
            // },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'venue',
    }
);

module.exports = Venue;