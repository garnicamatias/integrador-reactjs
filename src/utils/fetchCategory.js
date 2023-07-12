import axios from "axios";
import {
	isError,
	isFetching,
	success,
} from "../redux/featured/featuredCategorySlice";

export const fetchCategory = (CategoryId) => async (dispatch) => {

	dispatch(isFetching());

    const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?category=';
	
    try {
        const {data} = await axios(baseUrl + CategoryId);
		dispatch(success(data.results));
	} catch (err) {
		dispatch(isError());
	}
};
