import Main from "./components/Main";
import NavBar from "./components/Navbar";
import Cards from "./components/Cards/CardUI.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Main />
      <Cards />
    </div>
  );
}

export default App;
