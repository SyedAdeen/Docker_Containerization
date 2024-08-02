'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [{
      username: 'Alex',
      age: 32,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Brandon',
      age: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Kayla',
      age: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Austin',
      age: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Samantha',
      age: 31,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Tyler',
      age: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Morgan',
      age: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Justin',
      age: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Hannah',
      age: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Cameron',
      age: 33,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Lauren',
      age: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ethan',
      age: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Abigail',
      age: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Logan',
      age: 34,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Olivia',
      age: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Gabriel',
      age: 36,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ava',
      age: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Julian',
      age: 37,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Lily',
      age: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Alexander',
      age: 38,
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
