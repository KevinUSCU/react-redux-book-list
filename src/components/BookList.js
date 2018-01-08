import React from 'react'

export default function ({books, activeBook, handleSelectBook}) {
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
