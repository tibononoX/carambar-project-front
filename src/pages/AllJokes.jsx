import { useState, useEffect } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import axios from "@services/axios";
import { all } from "axios";
import JokesPaper from "@components/JokesPaper";

const AllJokes = () => {
  const [allJoke, setAllJoke] = useState([]);

  const fetchAllJoke = async () => {
    try {
      const response = await axios
        .get("/", { withCredentials: true })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      return setAllJoke(response);
    } catch (error) {
      console.error("Error fetching all jokes:", error);
    }
  };

  useEffect(() => {
    fetchAllJoke();
  }, []);

  return (
    <>
      <Header />
      <div className="page-content all-jokes-page">
        <h2 className="display-text">Toutes les blagues sont là !</h2>
        <div className="jokes-container">
          {allJoke.map((joke) => (
            <JokesPaper key={joke.id} joke={joke} isAllJokesPage={true} />
          ))}
        </div>
        <a className="all-jokes-link" href="/carambar-project-front/">
          Retour à l'accueil
        </a>
      </div>
      <Footer />
    </>
  );
};

export default AllJokes;
