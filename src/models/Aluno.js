import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 225],
            msg: 'O nome deve ter de 2 a 225 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 225],
            msg: 'O sobrenome deve ter de 2 a 225 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido.',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'A idade deve ser um numero inteiro.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isNumeric: { msg: 'O peso deve ser numérico.' },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isNumeric: { msg: 'A altura deve ser numérico' },
        },
      },
    }, {
      sequelize,
      timestamps: true,
    });
    return this;
  }

  static associate(models) {
    this.hasMany((models.Foto), { foreignKey: 'aluno_id' });
  }
}
