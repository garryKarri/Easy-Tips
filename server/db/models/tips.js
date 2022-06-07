const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Worker }) {
      // define association here
      this.belongsTo(Worker, { foreignKey: 'workerId' });
    }
  }
  Tips.init({
    tipSize: DataTypes.INTEGER,
    data: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    workerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tips',
  });
  return Tips;
};
