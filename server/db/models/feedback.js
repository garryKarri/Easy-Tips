const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FeedBack extends Model {
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
  FeedBack.init({
    text: DataTypes.TEXT,
    stars: DataTypes.FLOAT,
    data: DataTypes.STRING,
    workerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'FeedBack',
  });
  return FeedBack;
};
