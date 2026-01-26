import logo from "@assets/Logo.png";
import carambarjoke from "@assets/carambar-joke.png";

export default function Home() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={carambarjoke} className="App-logo" alt="logo" />
      </header>
      <div className="display-text">
        <h2>
          Les blagues les plus drôles, ici et nulle par ailleurs, offertes par
          Carambar & Co !
        </h2>
      </div>
    </>
  );
}
