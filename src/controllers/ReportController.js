const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Econtrar usuários gmail com o endereço X e retornar tecnologias Node.js

    const user = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like]: '%gmail.com%'
        }
      },
      include: [
        {
          association: 'addresses', where: {
            street: {
              [Op.like]: '%Rua Washington%'
            }
          }
        },
        {
          association: 'teams',
          required: false,
          where: {
            name: {
              [Op.like]: '%%'
            }
          }
        }
      ]
    });

    return res.json(user);
  }
}