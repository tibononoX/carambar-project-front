import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "@services/axios";
import button from "@assets/button.png";
import Header from "@components/Header";
import JokesPaper from "@components/JokesPaper";
import Footer from "@components/Footer";

export default function SingleJoke() {
  const [currentJoke, setCurrentJoke] = useState({});
  const { id } = useParams();

  const fetchJokeById = async (jokeId) => {
    try {
      const response = await axios
        .get(`/${jokeId}`, { withCredentials: true })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      return setCurrentJoke(response);
    } catch (error) {
      console.error("Error fetching joke by ID:", error);
    }
  };

  useEffect(() => {
    fetchJokeById(id);
  }, [id]);

  return (
    <>
      <Header />
      <div className="page-content">
        <h2 className="display-text">
          La blague unique que vous avez choisie !
        </h2>
        <JokesPaper joke={currentJoke} />

        <a className="all-jokes-link" href="/carambar-project-front/allJokes">
          Retour à la liste des blagues !
        </a>
      </div>
      <Footer />
    </>
  );
}
