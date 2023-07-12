import { createSlice } from '@reduxjs/toolkit';
import  {OpinionsClients}  from '../../data/OpinionsClients';

const INITIAL_STATE = {
  opinion : OpinionsClients,
};

export const opinionSlice = createSlice({
  name: 'guaranteed',
  initialState: INITIAL_STATE,
  reducers: {
    getOpinion: (state) => {
      return state;
    }
  },
});

export const { getOpinion} = opinionSlice.actions;

export default opinionSlice.reducer;