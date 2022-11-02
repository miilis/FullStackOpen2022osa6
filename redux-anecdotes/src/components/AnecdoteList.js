import { useSelector, useDispatch } from 'react-redux'
import { anecdoteVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotesState = useSelector(state => state.anecdotes)
  const anecdotes = [...anecdotesState].sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(anecdoteVote(id))
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