"use strict";/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Matheus Rezende',
        email: 'matheus@gmail.com',
        password_hash: await bcryptjs.hash('cristhian28', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Marcela Rezende',
        email: 'marcela@gmail.com',
        password_hash: await bcryptjs.hash('cristhian28', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Max Rezende',
        email: 'max@gmail.com',
        password_hash: await bcryptjs.hash('cristhian28', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Cristhian Alves',
        email: 'cristhian.ads@gmail.com',
        password_hash: await bcryptjs.hash('cristhian28', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Mary Rezende',
        email: 'mary@gmail.com',
        password_hash: await bcryptjs.hash('cristhian28', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
