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
        <Dictionary defaultKeyword="adventure"/>
      </main>
      <footer className="coded-by">
        Coded by&nbsp;
 <a className="text-decoration-none" href="https://github.com/laimac" target="_blank" rel="noopener">
Laima Ciselonoka
</a>
  </footer>
</div>
    </div>
  );
}

export default App;
