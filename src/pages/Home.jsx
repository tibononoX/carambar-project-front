import logo from "@assets/Logo.png";
import carambarjoke from "@assets/carambar-joke.png";
import jokepaper from "@assets/joke0paper.png";
import button from "@assets/button.png";

export default function Home({ currentJoke, fetchRandomJoke }) {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={carambarjoke} className="App-logo" alt="carambarLogo" />
      </header>
      <div className="page-content">
        <h2 className="display-text">
          Les blagues les plus drôles, ici et nulle par ailleurs, offertes par
          Carambar & Co !
        </h2>
        <div className="joke-paper">
          <img src={jokepaper} alt="joke" />
          <p className="joke-text">
            {currentJoke.question} <br /> <br />
            Réponse : {currentJoke.answer}
          </p>
        </div>
        <button className="button" onClick={fetchRandomJoke}>
          <img className="button-img" src={button} alt="Une autre !" />
        </button>
      </div>
    </>
  );
}
