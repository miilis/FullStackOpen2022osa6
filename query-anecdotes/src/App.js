import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from 'react-query'
import { getAnecdotes } from './requests'


const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const result = useQuery('anecdotes', getAnecdotes)
  console.log(result);

  if (result.isLoading) {
    return <div>loading data...</div>
  }
  else if (result.isError) {
    return <div>anecdote service not availabde due to problems in server</div>
  }
  else {
    const anecdotes = result.data === undefined ? [] : result.data

    return (
      <div>
        <h3>Anecdote app</h3>
      
        <Notification />
        <AnecdoteForm />
      
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App