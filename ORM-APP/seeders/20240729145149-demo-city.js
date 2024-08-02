'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [{
      userId: 1,
     city:"New York",
     createdAt: new Date(),
     updatedAt: new Date()
    },
  {
    userId: 2,
    city:"Florida",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    city:"Paris",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  
},


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
