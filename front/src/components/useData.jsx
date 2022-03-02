import { useState, useEffect } from "react";
import axios from "axios";

const useData = () => {
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const apiUrl = `http://localhost:5000/api/products`;
      await axios
        .get(apiUrl)
        .then((response) => {
          const allResponse = response.data;
          setProducts(allResponse);
          setFetching(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return [products, fetching];
};
export default useData;

