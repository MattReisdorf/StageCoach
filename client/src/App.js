import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Artist from './components/pages/Artist'


function App() {
    return (
        <Router>
             <NavBar />
             <Route exact path = '/' component = {Home} />
             <Route exact path = '/artists/:id' component = {Artist} />
             {/* <Route exact path = '/signup' component = {Signup} */}
             {/* <Route exact path = '/search' component = {Search} */}

        </Router>
       
    )
    
}

export default App;