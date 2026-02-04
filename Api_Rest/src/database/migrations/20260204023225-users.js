// Migrações: Servem para gerenciar e versionar a estrutura do banco de dados
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', { // Cria a tabela alunos no banco de dados
      id: {
        type: Sequelize.INTEGER, // Define o tipo: String/Integer/Char/Float/Date/Boolean
        allowNull: false, // Permissão para deixar esse campo nulo?
        autoIncrement: true, // Permissão para auto incrementar?
        primaryKey: true, // Chave primaria?
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
