const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Team = require('../models/Team');
const Product = require('../models/Product');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Team.init(connection);
Product.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Team.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;
