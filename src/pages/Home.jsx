import button from "@assets/button.png";
import { Link } from "react-router-dom";
import Header from "@components/Header";
import JokesPaper from "@components/JokesPaper";
import Footer from "@components/Footer";

export default function Home({ currentJoke, fetchRandomJoke }) {
  return (
    <>
      <Header />
      <div className="page-content">
        <h2 className="display-text">
          Les blagues les plus drôles, ici et nulle par ailleurs, offertes par
          Carambar & Co !
        </h2>
        <JokesPaper joke={currentJoke} />
        <button className="button" onClick={fetchRandomJoke}>
          <img className="button-img" src={button} alt="Une autre !" />
        </button>
        <Link className="all-jokes-link" to="allJokes">
          Je veux voir toutes les blagues !
        </Link>
      </div>
      <Footer />
    </>
  );
}
