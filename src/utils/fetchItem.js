import axios from "axios";
import {
	isError,
	isFetching,
	success,
} from "../redux/featured/featuredItemSlice";

export const fetchItem = (itemId) => async (dispatch) => {

	dispatch(isFetching());

    const baseUrl = 'https://api.mercadolibre.com/items?ids=';
	
    try {
        const {data} = await axios(baseUrl + itemId);
        console.log(data[0].body)
		dispatch(success(data[0].body));
	} catch (err) {
		dispatch(isError());
	}
};
