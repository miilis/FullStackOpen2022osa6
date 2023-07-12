import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotesState = useSelector(state => {
    if(state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter((dote) => dote.content.toLowerCase().includes(state.filter.toLowerCase()))
  })
  const anecdotes = [...anecdotesState].sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    const anecdoteVoted = anecdotesState.find(anecdote => anecdote.id === id)
    dispatch(setNotification(`you voted: '${anecdoteVoted.content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList