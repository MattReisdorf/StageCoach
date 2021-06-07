const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
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
            type: DataTypes.BIGINT,
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
            beforeCreate: async (newVenueData) => {
                if (newVenueData.username) {
                    let newVenueArr = newVenueData.username.split('');
                    if(newVenueArr.includes(['!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/'])){
                        throw new Error('Username can only contain letters and numbers');
                    } else if(newVenueArr.length > 20 || newVenueData.username.length < 4){
                        throw new Error('Username must be between 4 and 20 characters long');
                    }
                };
                if(newVenueData.password && newVenueData.password.length > 32 || newVenueData.password.length < 8){
                    throw new Error('Password must be between 8 and 32 characters long')
                };
                if (newVenueData.email) {
                    let newVenueArr = newVenueData.email.split('');
                    if(!newVenueArr.includes('@')){
                        throw new Error('Please provide a valid Email')
                    }
                };
                if (newVenueData.city) {
                    let newVenueArr = newVenueData.city.split('');
                    if(newVenueArr.includes(['!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/'])) {
                        throw new Error('The following characters are not allowed for City Name: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, `, ~, /')
                    }
                };
                if(newVenueData.bio && newVenueData.bio.length > 1000) {
                    throw new Error(`Your bio can't be longer than 1000 characters`)
                };
                if (newVenueData.venue_name && newVenueData.venue_name.length > 100){
                    throw new Error(`Your Venue name can't be longer than 100 characters`)
                };
                if (newVenueData.contact_title) {
                    let newVenueArr = newVenueData.contact_title.split('');
                    if(newVenueArr.includes(['!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/'])) {
                        throw new Error('The following characters are not allowed for a title name: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, `, ~, /')
                    }
                };
                if (newVenueData.contact_name) {
                    let newVenueArr = newVenueData.contact_name.split('');
                    if(newVenueArr.includes(['!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',])) {
                        throw new Error('Contact name cannot contain numbers or symbols')
                    }
                };
                if(newVenueData.contact_number && isNaN(newVenueData.contact_number)){
                    throw new Error('Only numbers allowed for contact number (we figured this goes without saying, dumbass)')
                };
                if (newVenueData.contact_email) {
                    let newVenueArr = newVenueData.contact_email.split('');
                    if(!newVenueArr.includes('@')){
                        throw new Error('Please provide a valid Email for contact email')
                    }
                };
                if(newVenueData.specs_capacity && isNaN(newVenueData.specs_capacity)){
                    throw new Error('Only numbers allowed for venue capacity')
                };
                if(newVenueData.specs_description && newVenueData.specs_description.length > 1000) {
                    throw new Error(`Your description can't be longer than 1000 characters`)
                };
                if(newVenueData.image_one && !newVenueData.image_one.includes('imgur')){
                    throw new Error(`Please provide an imgur image link for the image fields, for example: "https://imgur.com/a/LUjQxxt"`)
                };
                if(newVenueData.image_two && !newVenueData.image_two.includes('imgur')){
                    throw new Error(`Please provide an imgur image link for the image fields, for example: "https://imgur.com/a/LUjQxxt"`)
                };
                if(newVenueData.image_three && !newVenueData.image_three.includes('imgur')){
                    throw new Error(`Please provide an imgur image link for the image fields, for example: "https://imgur.com/a/LUjQxxt"`)
                };
                if(newVenueData.image_four && !newVenueData.image_four.includes('imgur')){
                    throw new Error(`Please provide an imgur image link for the image fields, for example: "https://imgur.com/a/LUjQxxt"`)
                };
                if(newVenueData.image_five && !newVenueData.image_five.includes('imgur')){
                    throw new Error(`Please provide an imgur image link for the image fields, for example: "https://imgur.com/a/LUjQxxt"`)
                };
                newVenueData.password = await bcrypt.hash(newVenueData.password, 10);
                console.log(newVenueData)
                return newVenueData;
            },
            beforeUpdate: async (updatedVenueData) => {
                updatedVenueData.password = await bcrypt.hash(updatedVenueData.password, 10);
                return updatedVenueData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'venue',
    }
);

module.exports = Venue;