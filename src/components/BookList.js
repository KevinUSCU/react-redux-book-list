import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions'

export function BookList ({books, activeBook, handleSelectBook}) {
  return (
    <ul className='list-group col-sm-4'>
      {
        books.map(createBookRender(activeBook, handleSelectBook))
      }
    </ul>
  )
}

function createBookRender (activeBook, handleSelectBook) {
  return function (book, index) {
    const active = activeBook && activeBook.id === book.id ? 'active' : ''

    return (
      <li
        onClick={() => handleSelectBook(book)}
        key={index}
        className={`list-group-item ${active}`} >
        { book.title }
      </li>
    )
  }
}

const mapStateToProps = (state) => ({ books: state.books })

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({ handleSelectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)