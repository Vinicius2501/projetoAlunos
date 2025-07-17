import User from '../models/User';

class UserController {
  async store(req, resp) {
    try {
      const novoUser = await User.create(req.body);
      return resp.json(novoUser);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index

  async index(req, resp) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return resp.json(users);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Show

  async show(req, resp) {
    try {
      const { id } = req.params;
      if (id) {
        const user = await User.findByPk(id, { attributes: ['id', 'nome', 'email'] });
        return resp.status(200).json(user);
      }
      return resp.status(400).json({ errors: ['Id não informado'] });
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Update

  async update(req, resp) {
    try {
      const id = req.userId;
      if (!id) {
        return resp.status(400).json({ errors: ['Id não informado.'] });
      }

      if (!req.body) { return resp.status(400).json({ errors: ['Dados não informados.'] }); }

      const user = await User.findByPk(id);
      if (!user) {
        return resp.status(404).json({ errors: ['Usuário não encontrado.'] });
      }

      await User.update(req.body, { where: { id } });

      const userUpdate = await User.findByPk(id, { attributes: ['id', 'nome', 'email'] });
      return resp.status(200).json(userUpdate);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete
  async delete(req, resp) {
    try {
      const { id } = req.params;
      if (!id) { return resp.status(400).json({ erros: ['Id não informado.'] }); }

      const user = await User.findByPk(id);
      if (!user) { return resp.status(400).json({ errors: ['Usuário não encontrado.'] }); }

      await user.destroy();
      return resp.status(200).json(user);
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
