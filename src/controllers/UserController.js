import User from '../models/User';

class UserController {
  async store(req, resp) {
    try {
      const novoUser = await User.create(req.body);
      resp.json(novoUser);
    } catch (e) {
      resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
