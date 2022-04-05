import { app } from "./app";
import { connection } from '../src/DataBases/Database'
import { booksRoutes } from './routes/Books.routes'

// ---- Conexão com o Banco de Dados ----
connection
  .authenticate()
  .then(() => {

    console.log("O Banco de Dados já está rodando --- 😎🧨🤑")
  })

// ----

// ---- Selecionando a View Engine ----

app.set('view engine', 'ejs')

// ----

app.use('/books', booksRoutes)

app.listen(8767, () => {

  console.log("O Server já está rodando --- 🎃😎🦅")
})