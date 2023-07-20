import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utitls/api";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something Went Wrong");
      });
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
