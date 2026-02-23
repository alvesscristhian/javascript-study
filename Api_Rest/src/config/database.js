require('dotenv').config();

module.exports = {
  dialect: 'mariadb', // Define o SGBD que está usando
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true, // Faz o Sequelize criar automaticamente duas colunas: created/update
    underscored: true, // Muda o padrão de nomes para snake_case no banco.
    underscoredAll: true, // Aplica o snake_case para todas as colunas, fk e nomes automáticos.
    createdAt: 'created_at',
    updateAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo', // Define o timezone usado na conexão com o banco.
  },
  timezone: 'America/Sao_Paulo', // Define o timezone que o Sequelize usa ao enviar datas para o banco.
};
