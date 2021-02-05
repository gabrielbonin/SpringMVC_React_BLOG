
import './App.css';

App.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>HELLO WORLD!</h1>
      </header>
    </div>
  );
}

export default App;
