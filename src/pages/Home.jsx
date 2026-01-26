import logo from "@assets/Logo.png";
import carambarjoke from "@assets/carambar-joke.png";
import jokepaper from "@assets/joke0paper.png";
import button from "@assets/button.png";

export default function Home() {
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
            Quel est le sport le plus fruité ? <br /> <br />
            Réponse : La boxe, parce que tu te prends des pêches dans la poire
            et tu tombes dans les pommes.
          </p>
        </div>
        <button className="button">
          <img src={button} alt="Une autre !" />
        </button>
      </div>
    </>
  );
}
