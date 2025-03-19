'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Video.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId'
      })
    }
  }
  Video.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    url: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
    categoriaId: {
      defaultValue: 16,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Video',
    tableName: 'videos'
  });
  return Video;
};

