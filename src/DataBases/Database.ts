import { Sequelize } from 'sequelize'

const connection = new Sequelize('draxask', 'root', 'V84816756', {

  host: 'localhost',
  dialect: 'mysql'
})

export { connection }