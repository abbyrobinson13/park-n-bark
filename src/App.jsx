import './App.css';
import Main from './components/Main';
import NavBar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';
import { ImagesData } from './components/Carousel/ImagesData'

function App() {
  return (
    <div className="App"> 
      <nav>
        <NavBar />
      </nav>
      <Main />
     <Carousel slides = {ImagesData} />
    </div>
  );
}

export default App;
