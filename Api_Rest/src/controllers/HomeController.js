import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Cristhian',
      sobrenome: 'Alves',
      email: 'cristhian.ads@hotmail.com',
      idade: 18,
      peso: 68,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
