const INITIAL_STATE = [
  { id: 1, title: 'Javascript: The good parts', pages: 101 },
  { id: 2, title: 'Harry Potter', pages: 12 },
  { id: 3, title: 'The Dark Tower', pages: 123 },
  { id: 4, title: 'Eloquent ruby', pages: 1 }
]


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}