import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"slider-1.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </header>
    </div>
  );
}

export default App;
