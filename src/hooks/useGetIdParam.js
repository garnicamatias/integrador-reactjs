import { useLocation } from "react-router-dom";

export const useGetIdParam = () => {
	
    const categoryParams = useLocation();
    let query = new URLSearchParams(categoryParams.search);
    let categoryId = query.get('id')

	return { categoryId};
};

