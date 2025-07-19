import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, resp) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'nome_arquivo'],
        },
      });
      return resp.json(alunos);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, resp) {
    try {
      const { id } = req.params;
      if (!id) { return resp.status(401).json({ errors: ['Id não informado;'] }); }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', ' sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [[Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'nome_arquivo'],
        },
      });
      if (!aluno) { return resp.status(404).json({ errors: ['Aluno não encontrado.'] }); }

      return resp.status(200).json(aluno);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async store(req, resp) {
    try {
      const novoAluno = await Aluno.create(req.body);
      return resp.status(200).json(novoAluno);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, resp) {
    try {
      const { id } = req.params;
      if (!id) { return resp.status(401).json({ errors: ['Id não informado.'] }); }

      if (!req.body) { return resp.status(401).json({ errors: ['Dados inválidos.'] }); }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) { return resp.status(404).json({ errors: ['Aluno não encontrado.'] }); }

      await Aluno.update(req.body, { where: { id } });

      const alunoUpdate = await Aluno.findByPk(id);
      return resp.status(200).json(alunoUpdate);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, resp) {
    try {
      const { id } = req.params;
      if (!id) { return resp.status(401).json({ errors: ['Id não informado.'] }); }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) { return resp.status(404).json({ errors: ['Aluno não encontrado.'] }); }

      await aluno.destroy();

      return resp.status(200).json(aluno);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
