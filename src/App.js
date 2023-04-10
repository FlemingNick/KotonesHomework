import './App.css';
import Task from './components/task/Task';
import React, {useState} from 'react';

function App() {

  const [tries, setTries] = useState(0);
  const solve = () => {
    setTries(tries +1);
    window.scrollTo(0,0);
    setTimeout(()=>{
      if(!document.getElementsByClassName("wrong")[0]){
        document.getElementById("congrats-container").style.display = "flex";
      }
    }, 500);
  }
  const hideModal = () => {
    document.getElementById("congrats-container").style.display = "none";
  }
  
  return (
    <div className="App">
      <div className="body">
        <header className="App-header">
        <h1>琴音の宿題 - Kotones Hausaufgaben</h1>
        </header>
        <div className="chapter">
        <h2>記事 - Artikel</h2>
        <p>Hier musst du den korrekten Artikel eingeben.</p>
        <p>Groß- und Kleinschreibung oder Leerzeichen sind egal.</p>
        <p>Manche Wörter haben mehrere Artikel. Ein richtiger Artikel reicht.</p>
          <ul>
            <Task answers={["der"]} description={"Schuh"} tries={tries}></Task>
            <Task answers={["die"]} description={"Küche"} tries={tries}></Task>
            <Task answers={["das"]} description={"Pferd"} tries={tries}></Task>
            <Task answers={["die"]} description={"Familie"} tries={tries}></Task>
            <Task answers={["der", "die", "das"]} description={"Joghurt"} tries={tries}></Task>
            <Task answers={["das"]} description={"Smartphone"} tries={tries}></Task>
            <Task answers={["die"]} description={"Brüder"} tries={tries}></Task>
            <Task answers={["der", "die", "das"]} description={"Band"} tries={tries}></Task>
            <Task answers={["die"]} description={"Natur"} tries={tries}></Task>
            <Task answers={["das"]} description={"Brot"} tries={tries}></Task>
            <Task answers={["der", "die"]} description={"Paprika"} tries={tries}></Task>
          </ul>
          <h3>難しい - schwierig</h3>
          <p>Bei manchen Wörtern unterscheidet sich die Bedeutung anhand des Artikels.</p>
          <p>Beispiel: <i>der Taube (deaf person)</i> oder <i>die Taube (鳩)</i></p>
          <ul>
            <Task answers={["der", "das"]} description={"Tor"} tries={tries}></Task>
            <Task answers={["die", "das"]} description={"Steuer"} tries={tries}></Task>
            <Task answers={["der", "das"]} description={"Bund"} tries={tries}></Task>
          </ul>
          <h2>活用 - Konjugation</h2>
          <p>Hier musst du das Wort in der richtigen Form schreiben.</p>
          <p>Beispiel: <i>gehen (du)</i> ist die korrekte Antwort <i>gehst</i></p>
          <p><i>(statt ß = s und ä = ae etc. ist auch okay)</i></p>
          <ul>
            <Task answers={["spiele"]} description={"spielen (ich)"} tries={tries}></Task>
            <Task answers={["bleibt"]} description={"bleiben (er)"} tries={tries}></Task>
            <Task answers={["lachen"]} description={"lachen (wir)"} tries={tries}></Task>
            <Task answers={["nimmt"]} description={"nehmen (sie (singular))"} tries={tries}></Task>
            <Task answers={["kaufst"]} description={"kaufen (du)"} tries={tries}></Task>
            <Task answers={["gibst"]} description={"geben (du)"} tries={tries}></Task>
            <Task answers={["weiß", "weiss"]} description={"wissen (ich)"} tries={tries}></Task>
            <Task answers={["lernt"]} description={"lernen (ihr)"} tries={tries}></Task>
            <Task answers={["isst"]} description={"essen (es)"} tries={tries}></Task>
            <Task answers={["fahren"]} description={"fahren (wir)"} tries={tries}></Task>
            <Task answers={["fährst", "faehrst"]} description={"fahren (du)"} tries={tries}></Task>
          </ul>
        </div>
        <div className="button-container">
          <button onClick={solve}>送信</button>
        </div>
      </div>
    <div id="congrats-container">
      <div className="giphy"><iframe src="https://giphy.com/embed/d4vWZtNRUoTTQpHoGQ" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/HIDIVE-anime-hidive-mother-of-the-goddess-dormitory-d4vWZtNRUoTTQpHoGQ">via GIPHY</a></p>
      <h1>YOU DID IT!</h1>
        <button onClick={hideModal}>YAY!</button>
      </div>
    </div>
  );
}

export default App;
