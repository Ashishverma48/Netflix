import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";

import LandingPage from "./pages/LandingPage/LandingPage";

import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getApiConfigrations, getGenres } from "./store/homeSlice";
import { fetchDataFromApi } from "./utitls/api";
import { Header } from "./component/header/Header";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((response) => {
      console.log(response);
      const url = {
        backdrop: response?.images?.secure_base_url + "original",
        poster: response?.images?.secure_base_url + "original",
        profile: response?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfigrations(url));
    });
  };
  const genresCall = async () => {
    let promise = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints?.forEach((url) => {
      promise.push(fetchDataFromApi(`genres/${url}/list`));
    });
    const data = await Promise.all(promise);
    console.log(data);
    data?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
