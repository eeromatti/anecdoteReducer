import { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteFilter from "./components/AnecdoteFilter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
// import { setAnecdotes } from './reducers/anecdoteReducer'
// import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
