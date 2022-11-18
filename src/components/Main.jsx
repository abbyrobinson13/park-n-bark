import { Routes, Route, useLocation } from 'react-router-dom';
import Events from '../pages/events';
import Favorites from '../pages/favorites';
import Feed from '../pages/feed';
import Friends from '../pages/friends';
import Home from '../pages/home';
import Parks from '../pages/parks';
import PetPals from '../pages/pet-pals';
import Saved from '../pages/saved';
import UpcomingEvents from '../pages/upcoming-events';
import Login from '../pages/login'

const Main = () => (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/parks' element={<Parks />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/saved' element={<Saved />}></Route>
        <Route path='/pet-pals' element={<PetPals />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/feed' element={<Feed />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/upcoming-events' element={<UpcomingEvents />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    );

    export default Main
