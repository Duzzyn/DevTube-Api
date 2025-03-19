'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.hasMany(models.Video, {
        foreignKey: 'categoriaId'
      })
    }
  }
  Categoria.init({
    titulo: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'O campo "titulo" é obrigatório.',
        },
      }
    },
    cor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'O campo "Cor" é obrigatório.'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias'
  });
  return Categoria;
};