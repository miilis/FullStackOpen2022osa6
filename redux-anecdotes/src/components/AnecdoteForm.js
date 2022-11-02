import { useDispatch } from 'react-redux'
import { anecdoteNew } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add_new = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(anecdoteNew(content))
    dispatch(setNotification(`Created anecdote: '${content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
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
