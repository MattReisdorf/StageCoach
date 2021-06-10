import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Artist from './components/pages/Artist';
import Venue from './components/pages/Venue';
import Show from './components/pages/Show';
import Search from './components/pages/Search';
import CreateShow from './components/pages/CreateShow';


function App() {
    return (
        <Router>
             <NavBar />
             <Route exact path = '/' component = {Home} />
             <Route exact path = '/artists/:id' component = {Artist} />
             <Route exact path = '/signup' component = {Signup} />
             <Route exact path = '/search' component = {Search} />
             <Route exact path = '/venues/:id' component = {Venue} />
             <Route exact path = '/shows/:id' component = {Show} />
             <Route exact path = '/shows/create' component = {CreateShow} />

        </Router>
       
    )
    
}

export default App;