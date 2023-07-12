import { useState } from "react";
import axios from "axios";

export const useAxiosItem = () => {
	const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(false);

    const getProductDataFromId = async (id) => {
  
        setData(null)
        try {
          const dataElement= await axios.get('https://api.mercadolibre.com/items?ids='+id)
          setData(dataElement.data[0]) 
        } catch (error) {
          console.log(error)
        }
      }


	return { data, getProductDataFromId };
    };