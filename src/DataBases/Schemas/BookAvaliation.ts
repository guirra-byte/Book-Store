import Sequelize from "sequelize";
import { connection } from "../Database";

const ReplyAva = connection.define('avaliations', {

  corpo: {

    type: Sequelize.TEXT,
    allowNull: false
  },
  avaliationId: {

    type: Sequelize.INTEGER,
    allowNull: false
  }

})

ReplyAva.sync({ force: false }).then(() => {

  console.log("A tabela de Avaliações já foi criada")
})

export { ReplyAva }