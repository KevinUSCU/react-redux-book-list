## At first, your React applications looked like this.
![](https://cdn-images-1.medium.com/max/1600/1*O3-jbieSsxcQFkrTLp-1zw.gif)
## But then you added user feedback, now your application looks like this
![](https://cdn-images-1.medium.com/max/1600/1*DrxF4q1jNkiEKKm1EBAgiQ.gif)
## Now things have gotten out of hand!!
![](https://cdn-images-1.medium.com/max/1600/1*9PS1G3FYqBbChVG0R1eh7Q.gif)
## Redux can help!
![](https://cdn-images-1.medium.com/max/1600/1*f3gS9znOZvX8HfCLg7T--Q.gif)

## What is Redux?
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. It provides actions are reducers to manage state.

## What is an action?
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

Actions are plain JavaScript **objects**. Actions must have a type property that indicates the type of action being performed. It can have other properties to pass data around.

```
{
  type: 'BOOK_SELECTED',
  payload: book
}
```

## What are action creators?
Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator,” so do your best to use the proper term.
```
export function selectBook (book) {
  console.log('a books has been selected:', book.title)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
```

## What is a reducer?
Reducers define how state changes to an action

```
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default:
      return state
  }
}
```

## Information flow in redux
![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/717/react-redux-flow.png)

## Fork and Clone the following repo
[react-redux-book-list](https://github.com/rogerwschmidt/react-redux-book-list)


## How do you setup redux in a react application?
* Create the `src/actions` folder. In that folder, create an `index.js` file.
* Create the `src/reducers` folder. In that folder, create an `index.js` file.
  * In the `index.js` file.
  * `import { combineReducers } from 'redux'`
  *  import all reducers that have been created (it might be none when you begin)
  *  invoke `combineReducers` with an object in which, the keys are the **redux** state, and the **values** are the reducers associated with that state.
  *  export the result of invoking `combineReducers`
* In the `src/index.js`
  * `import { Provider } from 'react-redux'`
  * `import { createStore } from 'redux'`
  * `import reducers from './reducers'` (notice that there is not specified file. When no file is given, the `index.js` files is imported)
  * Create (and save to a vvariable) a store using the `reducers`. This takes all the reducers (and middleware) and it creates a **redux store**. The one true source of truth in the application)
  * In ReactDOM.rended(), wrap the root component with the `<Provider>` element, and pass it the `store` created in the step above
  ```
  ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.querySelector('.container'))
  ```

## How to hook up state from a **redux store** to a react component
```
import React from 'react'
// 1. import `connect`
import { connect } from 'react-redux'

// 4. use the prop that was mapped from state!
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

// 2. create a function that returns an object that maps state of props
//    in the example below, state.activeBook is being mapped 
//    to book (this is what the component will receive as a prop)
const mapStateToProps = (state) => ({ book: state.activeBook })


// 3. connect mapping function to component (be sure to export!)
export default connect(mapStateToProps)(BookDetail)

```

## How to hook up an action to a react component
```
import React from 'react'

// 1. import `connect` and `bindActionCreators`
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// 2. import the creator that will be used
import { selectBook } from '../actions/index'


// this is a helper function that creates a function to render book entries
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

// 6. Use the the props that are now available.
const BookList = ({ books, activeBook, selectBook }) => (
  <ul className='list-group col-sm-4'>
    { books.map(createBookRender(activeBook, selectBook)) }
  </ul>
)

// 3. map state to props
const mapStateToProps = (state) => ({ books: state.books, activeBooks:state.activeBooks })

// 4. bind action creators, the key is the name of the prop, the value is a 
//    reference to an action creator function
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectBook: selectBook }, dispatch)

// 5. connect both mapping functions (order matters, first state, then actions) to the react component
export default connect(mapStateToProps, mapDispatchToProps)(BookList)

```





## Resources
* https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f