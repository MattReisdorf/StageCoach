const { Model, DataTypes } = require('sequelize');
const sequelize = require('../server');
const bcrypt = require('bcrypt');

class Artist extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Artist.init(
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
        city: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                isAlpha: true,
                is: /^[a-zA-Z.'-]+/g,
                allowNull: false
            }
        },
        state: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                isAlpha: true,
                is: /^[a-zA-Z.'-]+/g,
                allowNull: false
            }
        },
        artist_name: {
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
            validate: {
                max: 1000
            }
        },
        genre_one: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true
        },
        genre_two: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true
        },
        genre_three: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true
        },
        youtube_one: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        youtube_two: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        youtube_three: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        bandcamp_one: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        bandcamp_two: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        bandcamp_three: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        soundcloud_one: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        soundcloud_two: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
        soundcloud_three: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true,
            validate: {
                is: /^[<iframe].*[<>]$/igm
            }
        },
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
            validationFailed: async (newArtistData, options, error) => {
                //Username Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Email Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Password Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //City Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //State Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Artist Name Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Bio Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Youtube_One Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Youtube_Two Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Youtube_Three Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Bandcamp_One Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Bandcamp_Two Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Bandcamp_Three Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //SoundCloud_One Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Soundcloud_Two Validation + applicable Err
            },
            validationFailed: async (newArtistData, options, error) => {
                //Soundcloud_Three Validation + applicable Err
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'artist',
    }
);

module.exports = Artist;