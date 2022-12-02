import Main from "./components/Main";
import NavBar from "./components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import "./components/DataTable/font-awesome-library.js";

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
