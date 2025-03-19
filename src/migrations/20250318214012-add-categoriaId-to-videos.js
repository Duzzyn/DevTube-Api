'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('videos', 'categoriaId', {      
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'categorias', key: "id"}
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('videos', 'categoriaId');
  }
};
