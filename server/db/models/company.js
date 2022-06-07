const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Worker }) {
      // define association here
      this.hasMany(Worker, { foreignKey: 'companyId' });
    }
  }
  Company.init({
    company: DataTypes.TEXT,
    location: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
