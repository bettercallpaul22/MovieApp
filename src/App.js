import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          "http://www.omdbapi.com/?apikey=4478d1ba&s=batman"
        );
        setData(resp.data.Search);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

 







  return (
    <BrowserRouter>
   
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage props={data} />} />
      <Route path="/movie/:id" element={<MovieInfo props={data} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
