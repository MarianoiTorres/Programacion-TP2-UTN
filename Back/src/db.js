require('dotenv').config();
const { Sequelize } = require('sequelize')
const UserModel = require('./models/user')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false, native: false })

UserModel(sequelize)

const { User } = sequelize.models;

module.exports = { ...sequelize.models, sequelize }