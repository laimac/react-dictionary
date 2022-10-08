import logo from './dictionary-logo.PNG'
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
<div className="container">
      <header className="App-header">
<img src={logo} className="dictionary-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="coded-by">
        Coded by 
        <a href="/" src="https://github.com/laimac">
          Laima Ciselonoka
        </a>
      </footer>
</div>
    </div>
  );
}

export default App;
