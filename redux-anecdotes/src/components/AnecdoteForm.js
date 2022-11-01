import { useDispatch } from 'react-redux'
import { anecdoteNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add_new = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(anecdoteNew(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add_new}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
