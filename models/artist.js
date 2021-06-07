const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
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
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                unique: true
            }
        },
        city: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: false
        },
        artist_name: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: false,
            validate: {
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
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        youtube_two: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        youtube_three: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        bandcamp_one: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        bandcamp_two: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        bandcamp_three: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        soundcloud_one: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        soundcloud_two: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
        soundcloud_three: {
            type: DataTypes.TEXT,
            trim: true,
            allowNull: true,
        },
    },
    {
        hooks: {
            beforeCreate: async (newArtistData) => {
                if (newArtistData.username){
                    let newArtistArr = newArtistData.username.split('');
                    if(newArtistArr.includes(['!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/'])){
                        throw new Error('Username can only contain letters and numbers');
                    } else if(newArtistArr.length > 20 || newArtistData.username.length < 4){
                        throw new Error('Username must be between 4 and 20 characters long');
                    }
                };
                if(newArtistData.password && newArtistData.password.length > 32 || newArtistData.password.length < 8){
                    throw new Error('Password must be between 8 and 32 characters long')
                };
                if (newArtistData.email){
                    let newArtistArr = newArtistData.email.split('');
                    if(!newArtistArr.includes('@')){
                        throw new Error('Please provide a valid Email')
                    }
                };
                if (newArtistData.city) {
                    let newArtistArr = newArtistData.city.split('');
                    if(newArtistArr.includes(['!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/'])) {
                        throw new Error('The following characters are not allowed for City Name: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, `, ~, /')
                    }
                };
                if (newArtistData.artist_name && newArtistData.artist_name.length > 100){
                    throw new Error(`Your band name can't be longer than 100 characters`)
                };
                if(newArtistData.bio && newArtistData.bio.length > 1000) {
                    throw new Error(`Your bio can't be longer than 1000 characters`)
                };
                if(newArtistData.youtube_one && !newArtistData.youtube_one.includes('<iframe' && 'youtube' && '/iframe>')){
                    throw new Error('Only Youtube Embed links are allowed in the Youtube link field')
                };
                if(newArtistData.youtube_two && !newArtistData.youtube_two.includes('<iframe' && 'youtube' && '/iframe>')){
                    throw new Error('Only Youtube Embed links are allowed in the Youtube link field')
                };
                if(newArtistData.youtube_three && !newArtistData.youtube_three.includes('<iframe' && 'youtube' && '/iframe>')){
                    throw new Error('Only Youtube Embed links are allowed in the Youtube link field')
                };
                if(newArtistData.bandcamp_one && !newArtistData.bandcamp_one.includes('<iframe' && 'bandcamp' && '/iframe>')){
                    throw new Error('Only Bandcamp Embed links are allowed in the Bandcamp link field')
                };
                if(newArtistData.bandcamp_two && !newArtistData.bandcamp_two.includes('<iframe' && 'bandcamp' && '/iframe>')){
                    throw new Error('Only Bandcamp Embed links are allowed in the Bandcamp link field')
                };
                if(newArtistData.bandcamp_three && !newArtistData.bandcamp_three.includes('<iframe' && 'bandcamp' && '/iframe>')){
                    throw new Error('Only Bandcamp Embed links are allowed in the Bandcamp link field')
                };
                if(newArtistData.soundcloud_one && !newArtistData.soundcloud_one.includes('<iframe' && 'soundcloud' && '/iframe>')){
                    throw new Error('Only Soundcloud Embed links are allowed in the Soundcloud link field')
                };
                if(newArtistData.soundcloud_two && !newArtistData.soundcloud_two.includes('<iframe' && 'soundcloud' && '/iframe>')){
                    throw new Error('Only Soundcloud Embed links are allowed in the Soundcloud link field')
                };
                if(newArtistData.soundcloud_three && !newArtistData.soundcloud_three.includes('<iframe' && 'soundcloud' && '/iframe>')){
                    throw new Error('Only Soundcloud Embed links are allowed in the Soundcloud link field')
                };
                newArtistData.password = await bcrypt.hash(newArtistData.password, 10);
                console.log(newArtistData)
                return newArtistData;
            },
            beforeUpdate: async (updatedArtistData) => {
                updatedArtistData.password = await bcrypt.hash(updatedArtistData.password, 10);
                return updatedArtistData;
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