const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection /* or sequelize */) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING
    }, {
      sequelize: connection
      /* or just sequelize */
    });
  }

  // Associações de classes/tabelas
  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    this.belongsToMany(models.Team, { foreignKey: 'user_id', through: 'user_teams', as: 'teams' });
  }
}

module.exports = User;
