import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';


function App() {
    return (
        <Router>
             <NavBar />
             <Route exact path = '/' component = {Home} />
             {/* <Route exact path = '/login' component = {Login} /> */}
             <Route exact path = '/signup' component = {Signup} />
             {/* <Route exact path = '/search' component = {Search} /> */}

        </Router>
       
    )
    
}

export default App;