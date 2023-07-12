import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteId = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  const voteUpdate = {votes: response.data.votes + 1 }
  const { data } = await axios.patch(`${baseUrl}/${id}`, voteUpdate)
  return data
}

export default { getAll, createNew, voteId }