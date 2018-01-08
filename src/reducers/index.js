import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

export default combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
})