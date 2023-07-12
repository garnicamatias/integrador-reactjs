import { createSlice } from '@reduxjs/toolkit';
import  {Guaranteed}  from '../../data/Guaranteed';

const INITIAL_STATE = {
  guaranteed : Guaranteed,
};

export const guaranteedSlice = createSlice({
  name: 'guaranteed',
  initialState: INITIAL_STATE,
  reducers: {
    getGuaranteed: (state) => {
      return state;
    }
  },
});

export const { getGuaranteed} = guaranteedSlice.actions;

export default guaranteedSlice.reducer;