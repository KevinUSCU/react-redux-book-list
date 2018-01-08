import React from 'react'
import { connect } from 'react-redux'

const BookDetail = ({book}) => {
  if (!book) {
    return <div>Select a book to get started</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <div> Title: { book.title } </div>
      <div> Pages: { book.pages } </div>
    </div>
  )
}

const mapStateToProps = ({activeBook}) => ({ book: activeBook })

export default connect(mapStateToProps)(BookDetail)
