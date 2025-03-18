'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categorias', 
      [
        {
          titulo: '',
          cor: ''
        },
        {
          titulo: '',
          cor: ''
        },
        {
          titulo: '',
          cor: ''
        },
        {
          titulo: '',
          cor: ''
        },
        {
          titulo: '',
          cor: ''
        },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
