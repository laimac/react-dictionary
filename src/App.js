import logo from './dictionary-logo.PNG'
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
<div className="container">
      <header className="App-header">
        <div className="header display-1">Dictionary</div>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="coded-by fs-6">
        Coded by
        <div><a  className="text-decoration-none" href="https://github.com/laimac">
          Laima Ciselonoka
        </a>
        </div>
      </footer>
</div>
    </div>
  );
}

export default App;
