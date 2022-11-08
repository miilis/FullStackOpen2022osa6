import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    anecdoteVote(state, action) {
      const changedId = action.payload
      const anecdoteToChanged = state.find(anecdote => anecdote.id === changedId)
      const anecdoteChanged = {...anecdoteToChanged, votes: anecdoteToChanged.votes + 1}
      return state.map(anecdote => 
        anecdote.id === changedId ? anecdoteChanged : anecdote
      )
    },
    anecdoteNew(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { anecdoteNew, anecdoteVote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer