'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categorias',
      [
        {
          titulo: 'Programação',
          cor: 'Verde',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: 'Front-End',
          cor: 'Azul',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: 'DevOps',
          cor: 'Vermelho',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: 'Mobile',
          cor: 'Amarelo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: 'Inteligência Artificial',
          cor: 'Roxo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
