import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import AllJokes from "@pages/AllJokes";
import SingleJoke from "@pages/SingleJoke";
import "./App.scss";
import axios from "@services/axios";

function App() {
  const [currentJoke, setCurrentJoke] = useState({});

  const fetchRandomJoke = async () => {
    try {
      const response = await axios
        .get("/random", { withCredentials: true })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      return setCurrentJoke(response);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home currentJoke={currentJoke} fetchRandomJoke={fetchRandomJoke} />
          }
        />
        <Route path="allJokes" element={<AllJokes />} />
        <Route path="allJokes/:id" element={<SingleJoke />} />
      </Routes>
    </div>
  );
}

export default App;
