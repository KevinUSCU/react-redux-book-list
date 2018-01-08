import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'


class BookList extends Component {
  renderBook = (book, index) => {
    const { activeBook, selectBook } = this.props
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

  render(){
    const { books } = this.props

    return (
      <ul className="list-group col-sm-4">
        {
          books.map(this.renderBook)
        }
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books,
    activeBook: state.activeBook
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
