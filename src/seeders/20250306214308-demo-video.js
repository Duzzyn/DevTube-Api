'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('videos', [
      {
        titulo: 'C# .NET Course Tutorial',
        descricao: 'neste video você vai aprender a usar C#',
        url: 'https://www.youtube.com/watch?v=YrtFtdTTfv0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Kubernetes for Beginners',
        descricao: 'quer aprender a orquestrar containers? você vai aprender nesse video.',
        url: 'https://www.youtube.com/watch?v=hK8wf18SasY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Build a Memory Game in React',
        descricao: 'Construindo um jogo de memória usando react',
        url: 'https://www.youtube.com/watch?v=MzVbgZgGON4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python Smart Contracts on Blockchain',
        descricao: 'Aprenda a construir smart contracts usando python!',
        url: 'https://www.youtube.com/watch?v=nWsLw_1OpE0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Learn Tailwind CSS: Build A Responsive Product Card',
        descricao: 'Tailwind CSS, aprenda a utilizar essa tecnologia',
        url: 'https://www.youtube.com/watch?v=cG2rf7hTvsw',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('videos', null, {});
  }
};
