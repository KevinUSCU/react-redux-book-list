export function selectBook(book) {
  console.log('a books has been selected:', book.title)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
