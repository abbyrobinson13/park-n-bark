import Main from "./components/Main";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Main />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
