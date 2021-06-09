import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';
import axios from 'axios';

require('dotenv').config();


export default function Home() {

    const [cityState, setCityState] = React.useState('');
    const [lat, setLat] = React.useState('');
    const [long, setLong] = React.useState('');
    const [search, setSearch] = React.useState('');

    
    const handleSearch = (event) => {
        event.preventDefault();

        let text = event.target.value;
        console.log(text);
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


    // HANDLE SUBMIT FOR SEARCH -> SEND PROPS TO SEARCH COMPONENT

    if (cityState === '') {
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
                        <h4>Week's Worth of Shows</h4>
                    </div>
                </div>

                <div className = 'container'>
                    <div className = 'search-placeholder'>
                        <p className = 'search-text'>Search for an Artist or Venue</p>
                        <form className = 'search-form'>
                            <input className = 'form-control' type = 'search' onChange = {handleSearch} placeholder = '' aria-label = 'search'></input>
                                <Link
                                    to = {{
                                        pathname: '/search',
                                        searchProps: { search, cityState, lat, long }
                                    }}
                                        className = 'search-link'
                                >
                                    <button className = 'btn btn-dark search-button' type = 'submit'>
                                        Search
                                    </button>
                                </Link>
                            
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
                    <h1>Howdy, {cityState}</h1>
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
                        <input className = 'form-control' type = 'search' onChange = {handleSearch} placeholder = '' aria-label = 'search' id = 'input'></input>
                        <button className = 'btn btn-dark search-button' type = 'submit'>
                            <Link
                                to = {{
                                    pathname: '/search',
                                    searchProps: { search, cityState, lat, long }
                                }}
                                     className = 'search-link'
                            >
                                Search
                            </Link>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )

}