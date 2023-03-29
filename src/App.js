import './styles/App.css';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <div className="App">
      <div className="titleHeader">
        <h1>Harry Potter Memory Game</h1>
        <p>Welcome to this Harry Potter Inspired Game! Press on a card, but don't press twice or your score is back to 0.</p>
      </div>
      <Gameboard></Gameboard>
    </div>
  );
}

export default App;
