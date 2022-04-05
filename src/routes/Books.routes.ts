import { response, Router } from 'express'
import { Books } from '../DataBases/Schemas/BookSchema'
import { ReplyAva } from '../DataBases/Schemas/BookAvaliation'
const booksRoutes = Router()

booksRoutes.get('/book', (request, response) => {

  response.render('Book')
})
//Formulário de Criação 
//O Navegador apenas requisições do tipo GET  


booksRoutes.post('/createBook', (request, response) => {

  const nameOfBook = request.body.name
  const description = request.body.description
  const author = request.body.author

  if (nameOfBook !== "" && description !== "" && author !== "") {

    Books.create({

      name: nameOfBook,
      description: description,
      author: author

    }).then(() => {

      response.redirect('/books')

    }).catch((error) => {

      console.log(`${error}`)
    })

  }

  console.log("Nome do livro precisa ser preenchido")
})

//Envio das Propriedades dos livros criados
//Inserção no Banco de Dados
//Redirecionando para a página onde todos os livro são listados

booksRoutes.get('/', (request, response) => {

  Books.findAll({
    raw: true,
    order: [['id', 'DESC']]

  }).then((livros) => {

    response.render('Home', {

      books: livros
    })
  })
})

booksRoutes.get('/replyAva/:id', (request, response) => {


  const id = request.params.id
  Books.findOne({

    where: { id: id }
  }).then((book) => {

    if (book !== undefined) {

      ReplyAva.findAll({

        where: { avaliationId: id },
        raw: true,
        order: [['id', 'DESC']]
      }).then((avas) => {

        response.render('AllBooks', {

          bookProps: book,
          bookAva: avas
        })

      })
    }

    else {

      response.redirect('/book')
    }
  })
  //response.render('AllBooks')
})

//Ava = AValiation

booksRoutes.post('/bookAva', (request, response) => {

  const body = request.body.reply
  const avaId = request.body.avaliationId

  if (body !== "" && avaId !== "") {

    ReplyAva.create({

      corpo: body,
      avaliationId: avaId

    }).then(() => {

      response.redirect('replyAva/' + avaId)
    })
  }



})

export { booksRoutes }