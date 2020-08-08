const { Model, DataTypes } = require('sequelize');

class Team extends Model {
  static init(connection /* or sequelize */) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: connection,
/*       tableName: 'teams' */
      /* or just sequelize */
    });
  }

  // Associações classes/tabelas
  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'team_id', through: 'user_teams', as: 'users' });
    this.hasMany(models.Product, { foreignKey: 'team_id', as: 'products' });
  }
}

module.exports = Team;
