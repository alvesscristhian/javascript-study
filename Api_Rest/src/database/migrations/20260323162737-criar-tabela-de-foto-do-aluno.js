// Migrações: Servem para gerenciar e versionar a estrutura do banco de dados
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', { // Cria a tabela no banco de dados
      id: {
        type: Sequelize.INTEGER, // Define o tipo: String/Integer/Char/Float/Date/Boolean
        allowNull: false, // Permissão para deixar esse campo nulo?
        autoIncrement: true, // Permissão para auto incrementar?
        primaryKey: true, // Chave primaria?
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos', // Referência a tabela alunos pela chave id
          key: 'id',
        },
        onDelete: 'SET NULL', // Se apagar/att pk do pai a fk filho is null
        onUpdate: 'CASCADE', // Se a pk pai alterar, vai refletir no registro filho
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
    await queryInterface.dropTable('alunos');
  },
};
