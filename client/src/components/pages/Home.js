import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';
import Calendar from '../Calendar';
import axios from 'axios';

require('dotenv').config();


export default function Home() {

    // Chnage default states back to empty strings for production
    const [cityState, setCityState] = React.useState('Chicago');
    const [lat, setLat] = React.useState('41.88');
    const [long, setLong] = React.useState('-87.63');
    const [search, setSearch] = React.useState('');

    
    const handleSearch = (event) => {
        event.preventDefault();

        let text = event.target.value;
        setSearch(text);
    }


    // IPIFY API REQUEST
    // useEffect(() => {
    //     axios
    //         .get(
    //             process.env.REACT_APP_IPIFY
    //         )
    //         .then((result) => {
    //             setCityState(result.data.location.city);
    //             setLat(result.data.location.lat);
    //             setLong(result.data.location.lng);
    //         })
    // })


    return (
        <div className = 'home-background'>

            <div className = 'container-fluid'>
                <div className = 'howdy text-center'>
                    <h1>Howdy!</h1>
                    <h3>Here's What's Happening In {cityState} This Month</h3>
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
                        <input className = 'form-control shadow' type = 'search' onChange = {handleSearch} placeholder = '' aria-label = 'search' id = 'input'></input>
                        <div id="bottom-button">
                            <Link
                                to = {{
                                    pathname: '/search',
                                    searchProps: { search, cityState, lat, long }
                                }}
                                     className = 'search-link'
                            >
                                <button id="srch-button" className = 'btn btn-dark search-button shadow-lg' type = 'submit'>
                                    Search
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )

}