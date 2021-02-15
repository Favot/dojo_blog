import Navbar from "./navbar/Navbar";
import Home from "./content/Home";

function App() {
  const title = "Welcome tot the new Blog";
  const likes = 50;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
