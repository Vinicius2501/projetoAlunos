import jwt from 'jsonwebtoken';
import User from '../models/User';

require('dotenv').config();

class TokenController {
  async store(req, resp) {
    const { email = '', password = '' } = req.body;
    try {
      if (!email || !password) { return resp.status(401).json({ errors: ['Credênciais invalidas.'] }); }

      const user = await User.findOne({ where: { email } });

      if (!user) { return resp.status(400).json({ errors: ['Usuário não encontrado'] }); }

      if (!(await user.passwordIsValid(password))) { return resp.status(401).json({ errors: ['Credênciais invalidas.'] }); }

      const { id } = user;
      const token = jwt.sign(
        { id, email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION,
        },
      );

      return resp.json({ token, user: { nome: user.nome, id, email } });
    } catch (e) {
      return resp.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new TokenController();
