import { useEffect, useState } from "react";
import Home from "@pages/Home";
import "./App.scss";
import axios from "@services/axios";

function App() {
  const [currentJoke, setCurrentJoke] = useState({});

  const fetchRandomJoke = async () => {
    try {
      const response = await axios.get("/random", { withCredentials: true });
      setCurrentJoke(response.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className="App">
      <Home currentJoke={currentJoke} fetchRandomJoke={fetchRandomJoke} />
    </div>
  );
}

export default App;
