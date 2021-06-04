const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Show extends Model {};

Show.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                allowNull: false
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: 1000
            }
        },
        venue_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'venue',
                key: 'id',
                onDelete: 'CASCADE'
            }
        },
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'artist',
                key: 'id',
                onDelete: 'CASCADE'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'show'
    }
)

module.exports = Show;