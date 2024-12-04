import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },

    voteAnecdote(state, action) {
      const id = action.payload.id;
      const anecdoteToUpdate = state.find((anecdote) => anecdote.id === id);
      if (anecdoteToUpdate) {
        anecdoteToUpdate.votes = action.payload.votes;
      }
    },

    appendAnecdote(state, action) {
      state.push(action.payload);
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdotes = (content) => {
  return async (dispatch) => {
    const anecdote = {
      content: content,
      id: generateId(),
      votes: 0,
    };
    await anecdoteService.create(anecdote);
    // console.log("new anecdote in createAnecdotes action creator:", anecdote);
    dispatch(appendAnecdote(anecdote));
  };
};

export const updateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const response = await anecdoteService.vote(
      updatedAnecdote.id,
      updatedAnecdote
    );
    dispatch(voteAnecdote(response.data));
  };
};

export default anecdoteSlice.reducer;
