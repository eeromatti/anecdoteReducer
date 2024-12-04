import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (anecdote) => {
    await axios.post(baseUrl, anecdote)
}

const vote = (id, updatedAnecdote) => {
    return axios.put(`${baseUrl}/${id}`, updatedAnecdote)
}

export default {
    getAll,
    create,
    vote
}
