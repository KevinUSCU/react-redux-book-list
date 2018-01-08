import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

const createBookRender = (activeBook, selectBook) =>
  (book, index) => {
    const active = activeBook && activeBook.id === book.id ? 'active' : ''

    return (
      <li
        onClick={() => selectBook(book)}
        key={index}
        className={`list-group-item ${active}`} >
        {book.title}
      </li>
    )
  }

const BookList = ({ books, activeBook, selectBook }) => (
  <ul className='list-group col-sm-4'>
    {
      books.map(createBookRender(activeBook, selectBook))
    }
  </ul>
)

function mapStateToProps (state) {
  return {
    books: state.books,
    activeBook: state.activeBook
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
