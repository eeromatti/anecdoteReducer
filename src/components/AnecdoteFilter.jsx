import { useDispatch } from "react-redux"
import { filterChange } from '../reducers/filterReducer'

const AnecdoteFilter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        console.log("filter value:", event.target.value)
        dispatch(filterChange(event.target.value))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter
            <input 
                name="filter"
                onChange={handleChange}
            />
        </div>
    )
}

export default AnecdoteFilter