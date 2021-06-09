import React, { Component } from 'react';
import Calendar from '../Calendar'
// import IPAPI from '../../utils/IPAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';

require('dotenv').config();


class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            city: '',
            state: ''
        };
    }

    // componentDidMount() {
        // fetch(process.env.REACT_APP_IPIFY)
        // .then(res => res.json())
        // .then(
        //     (result => {
        //         console.log(result);
        //         this.setState({
        //             city: result.location.city,
        //             state: result.location.region
        //         })
        //     })
        // )
    // }

    //logical stuff for calendar/location gonna go here



    render() {
        if (this.state.city === '') {

            return (
                <div className = 'home-background'>

                <div className = 'container-fluid'>
                    <div className = 'howdy text-center'>
                        <h1>Howdy,</h1>
                        <h3>Here's What's Happening In Your Town This Week</h3>
                    </div>
                </div>

                <div className = 'container'>
                    <div className = 'calendar-placeholder'>
                        <Calendar />
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

        return (
            <div className = 'home-background'>

                <div className = 'container-fluid'>
                    <div className = 'howdy text-center'>
                        <h1>Howdy, {this.state.city}</h1>
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