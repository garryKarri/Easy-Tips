const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Worker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Company, Tips, FeedBack }) {
      // define association here
      this.belongsTo(Company, { foreignKey: 'companyId' });
      this.hasMany(Tips, { foreignKey: 'workerId' });
      this.hasMany(FeedBack, { foreignKey: 'workerId' });
    }
  }
  Worker.init({
    userName: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    walletNumber: DataTypes.TEXT,
    image: DataTypes.TEXT,
    companyId: DataTypes.INTEGER,
    aboutWorker: DataTypes.TEXT,
    instagram: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Worker',
  });
  return Worker;
};
