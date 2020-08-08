const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(connection) {
    super.init({
      code: DataTypes.STRING,
      batch: DataTypes.STRING,
      description: DataTypes.STRING,
      state: DataTypes.STRING
    }, {
      sequelize: connection
    });
  }

  // Associação
  static associate(models) {
    this.belongsTo(models.Team, { foreignKey: 'team_id', as: 'team' });
  }
}

module.exports = Product;
