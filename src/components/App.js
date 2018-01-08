import React, { Component } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetails'

const books = [
  { id: 1, title: 'Javascript: The good parts', pages: 101 },
  { id: 2, title: 'Harry Potter', pages: 12 },
  { id: 3, title: 'The Dark Tower', pages: 123 },
  { id: 4, title: 'Eloquent ruby', pages: 1 }
]

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books,
      activeBook: null
    }
    this.selectBook = this.selectBook.bind(this)
  }
  selectBook (book) {
    console.log('a books has been selected:', book.title)
    this.setState({ activeBook: {...book} })
  }
  render () {
    return (
      <div>
        <BookList />
        <BookDetail
          book={this.state.activeBook} />
      </div>
    )
  }
}
