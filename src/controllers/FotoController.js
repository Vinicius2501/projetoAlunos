import multer from 'multer';
import multerconfig from '../config/multerconfig';
import Foto from '../models/Foto';
import Aluno from '../models/Aluno';

const upload = multer(multerconfig).single('archive');

class FotoController {
  store(req, resp) {
    return upload(req, resp, async (err) => {
      if (err) { return resp.status(400).json({ errors: [err.code] }); }

      if (!req.file) { return resp.status(400).json({ errors: ['Arquivo não enviado.'] }); }
      const { originalname, filename } = req.file;
      const id = req.body.aluno_id;
      if (!id) { return resp.status(400).json({ errors: ['Id não informado.'] }); }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) { return resp.status(404).json({ errors: ['Aluno não encontrado'] }); }

      const foto = await Foto.create({
        nome_original: originalname,
        nome_arquivo: filename,
        aluno_id: id,
      });
      return resp.json(foto);
    });
  }
}

export default new FotoController();
