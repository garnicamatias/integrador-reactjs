import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataItem: '',
	isLoadingItem: false,
	errorItem: false,
};

export const featuredItemSlice = createSlice({
  	name: "featuredItem",
	initialState,
	reducers: {
		isFetching: (state) => {
			return {
				...state,
				isLoadingItem: true,
				errorItem: false,
				dataItem: null,
			};
		},
		success: (state, action) => {
			return {
				...state,
				isLoadingItem: false,
				dataItem: action.payload,
				errorItem: false,
			};
		},
		isError: (state) => {
			return {
				...state,
				errorItem: "Item no cargado",
				dataItem: null,
				isLoadingItem: false,
			};
		},
	},
});

export const { isFetching, success, isError} = featuredItemSlice.actions;

export default featuredItemSlice.reducer;
