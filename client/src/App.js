import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
<<<<<<< HEAD:src/App.js
import Signup from './components/pages/Signup';
=======
import Artist from './components/pages/Artist'
>>>>>>> main:client/src/App.js


function App() {
    return (
        <Router>
             <NavBar />
             <Route exact path = '/' component = {Home} />
<<<<<<< HEAD:src/App.js
             {/* <Route exact path = '/login' component = {Login} /> */}
             <Route exact path = '/signup' component = {Signup} />
             {/* <Route exact path = '/search' component = {Search} /> */}
=======
             <Route exact path = '/artists/:id' component = {Artist} />
             {/* <Route exact path = '/signup' component = {Signup} */}
             {/* <Route exact path = '/search' component = {Search} */}
>>>>>>> main:client/src/App.js

        </Router>
       
    )
    
}

export default App;