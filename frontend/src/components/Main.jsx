import { Routes, Route } from 'react-router-dom';
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
import Search from '../pages/Search';

const Main = () => (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/parks' element={<Parks />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/saved' element={<Saved />} />
        <Route path='/pet-pals' element={<PetPals />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/events' element={<Events />} />
        <Route path='/upcoming-events' element={<UpcomingEvents />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    );

    export default Main
