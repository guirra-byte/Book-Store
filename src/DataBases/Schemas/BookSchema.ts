import Sequelize from 'sequelize'
import { connection } from '../Database'
import { Book } from '../../model/Book'


const Books = connection.define('books', {

  name: {

    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Books.sync({ force: false }).then(() => {

  console.log('A tabela de Booksjá foi criada')
})

export { Books }