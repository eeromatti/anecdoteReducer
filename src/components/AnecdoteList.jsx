import { voteAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch, useSelector } from "react-redux"

const anecdoteList = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const vote = (id) => {
        dispatch(voteAnecdote(id))
      }

    return (
    <div>
        {anecdotes
        .slice()
        .sort((a,b) => b.votes - a.votes)
        .map(anecdote =>
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
    )}

export default anecdoteList