import React, { Component } from 'react';
import '../css/Home.css';

class Home extends Component {






    //logical stuff for calendar gonna go here



    render() {
        return (
            <div className = 'home-background'>

                <div className = 'container-fluid'>
                    <div className = 'howdy text-center'>
                        <h1>Howdy, IP LOCATION</h1>
                        <h3>Here's What's Happening In Your Town This Week</h3>
                    </div>
                </div>

                <div className = 'container'>
                    <div className = 'calendar-placeholder'>
                        <h4>Week's Worth of Shows</h4>
                    </div>
                </div>

                <div className = 'container'>
                    <div className = 'search-placeholder'>
                        <p className = 'search-text'>Search for an Artist or Venue</p>
                        <form className = 'search-form'>
                            <input className = 'form-control' type = 'search' placeholder = '' aria-label = 'search'></input>
                            <button className = 'btn btn-dark search-button' type = 'submit'>Search</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Home;