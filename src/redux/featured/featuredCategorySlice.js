import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: '',
	isLoading: false,
	error: false,
};

export const featuredCategorySlice = createSlice({
  name: "featuredCategory",
	initialState,
	reducers: {
		isFetching: (state) => {
			return {
				...state,
				isLoading: true,
				error: false,
				data: null,
			};
		},
		success: (state, action) => {
			return {
				...state,
				isLoading: false,
				data: action.payload,
				error: false,
			};
		},
		isError: (state) => {
			return {
				...state,
				error: "Datos no cargados",
				data: null,
				isLoading: false,
			};
		},
	},
});

export const { isFetching, success, isError} = featuredCategorySlice.actions;

export default featuredCategorySlice.reducer;

