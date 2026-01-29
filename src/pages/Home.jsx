import button from "@assets/button.png";
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
        <a className="all-jokes-link" href="/carambar-project-front/allJokes">
          Je veux voir toutes les blagues !
        </a>
      </div>
      <Footer />
    </>
  );
}
