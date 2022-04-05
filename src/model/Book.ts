import { Entity } from "./Entity/Entity";
import { Books } from '../DataBases/Schemas/BookSchema'

type BookProps = {
  name: string
  description: string
  author: string
}

export class Book extends Entity<BookProps>{

  constructor(props: BookProps) {

    super(props)
  }

  get create() {

    return Books.create(this.props)
  }
}