import { useState } from "react";
import axios from "axios";

export const useAxiosItem = (id) => {
	const [data, setData] = useState([]);
  const [firstImg, setFirstImg] = useState(null)
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(false);

    const getProductDataFromId = async (id) => {
  
        setData(null)
        try {
          const dataElement= await axios.get('https://api.mercadolibre.com/items?ids='+id)
          if (dataElement.data[0].body.title !== 'Diferencia De Precios') {
            setData(dataElement.data[0].body) 
            setFirstImg(dataElement.data[0].body.pictures[0].url)
          }
        } catch (error) {
          console.log(error)
        }
      }


	return { data, getProductDataFromId, firstImg };
    };