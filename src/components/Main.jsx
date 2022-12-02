import { Routes, Route } from 'react-router-dom';
import Events from '../pages/events';
import Favorites from '../pages/favorites';
import Home from '../pages/home';
import Parks from '../pages/parks';
import Login from '../pages/login'
import Search from '../pages/Search';
import Fun from '../pages/fun';

const Main = () => (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/parks' element={<Parks />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/fun' element={<Fun />} />
        <Route path='/events' element={<Events />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    );

    export default Main
