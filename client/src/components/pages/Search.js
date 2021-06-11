import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import axios from 'axios';
import haversine from '../../utils/Haversine-Formula';
import "../css/Search.css";
// import { Artist, Venue } from '../../../../models';

// const express = require('express');
// app.use(express);
// const db = require('../../../../models');


export default function Search(props) {
    
    console.log('props', props);

    if (props.location.searchProps) {
        localStorage.setItem('search', props.location.searchProps.search)
        if(props.location.searchProps.cityState) {
            localStorage.setItem('city', props.location.searchProps.cityState)
        }
        else {
            localStorage.setItem('city', props.location.searchProps.lsCity)
        }
        if(props.location.searchProps.lat) {
            localStorage.setItem('lat', props.location.searchProps.lat)
        }
        else {
            localStorage.setItem('lat', props.location.searchProps.lsLat);
        }
        if(props.location.searchProps.long) {
            localStorage.setItem('long', props.location.searchProps.long)
        }
        else {
            localStorage.setItem('long', props.location.searchProps.lsLong);
        }
        
    }

    
    

    // Pulled localStorage Variables
    // let lsCity = localStorage.getItem('city');
    // let lsLat = localStorage.getItem('lat');
    // let lsLong = localStorage.getItem('long');
    
    // States
    const [searchData, setSearchData] = useState([])
    const [search, setSearch] = useState(localStorage.getItem('search'));
    const [sortDirections, setSortDirections] = useState({ name: '', type: '', distance: '' })
    const [lsCity, setlsCity] = useState(localStorage.getItem('city'));
    const [lsLat, setlsLat] = useState(localStorage.getItem('lat'));
    const [lsLong, setlsLong] = useState(localStorage.getItem('long'));
    
   




  
    // Async Functions to Get Data
    const getArtistData = async() => {
        let artistData;
        await axios
            .get('/api/artists')
            .then((results) => {
                artistData = results.data;
            })
            .catch((err) => {
                console.log(err);
            })

        for (let i = 0; i < artistData.length; i++) {
            await axios
                .get(`http://api.openweathermap.org/geo/1.0/direct?q=${artistData[i].city},${artistData[i].state},US&appid=b432d6bb20293207031c4335d6e23edb`)
                .then((results) => {
                    artistData[i].lat = String(results.data[0].lat);
                    artistData[i].long = String(results.data[0].lon);
                })
        }
        return artistData
    }

    const getVenueData = async() => {
        let venueData;
        await axios 
            .get('/api/venues')
            .then((results) => {
                venueData = results.data
            })
            .catch((err) => {
                console.log(err)
            })

        for (let i = 0; i < venueData.length; i++) {
            await axios
                .get(`http://api.openweathermap.org/geo/1.0/direct?q=${venueData[i].city},${venueData[i].state},US&appid=b432d6bb20293207031c4335d6e23edb`)
                .then((results) => {
                    venueData[i].lat = String(results.data[0].lat);
                    venueData[i].long = String(results.data[0].lon);
                })
        }
        return venueData
    }

    const getAllData = async() => {
        // console.log(await getArtistData());
        let adata = await getArtistData();
        let vdata = await getVenueData();
        let allData = [];

        for (let i = 0; i < adata.length; i++) {
            allData.push(adata[i]);
        }
        for (let j = 0; j < vdata.length; j++) {
            allData.push(vdata[j]);
        }

        return allData;
    } 

    // Async Function to Filter Data
    const filterData = async(search) => {
        let allData = await getAllData();
        let searchResults = []

        for (let i = 0; i < allData.length; i++) {

            if (allData[i].artist_name) {
                if (allData[i].artist_name.toLowerCase().includes(search.toLowerCase())) {
                    searchResults.push(allData[i])
                }
            }

            else if (allData[i].venue_name) {
                if (allData[i].venue_name.toLowerCase().includes(search.toLowerCase())) {
                    searchResults.push(allData[i])
                }
            }

            // EXPAND WHAT CAN BE FILTERED FROM SEARCH -> GENRES/CITIES/ETC
        }

        return searchResults;
    }
    
    // Set Search State in useEffect
    useEffect(async () => {
        setSearchData(await filterData(search));
    }, [])

    console.log('search state', search);
    // console.log(searchData);
  
  
    const handleRefresh = (event) => {
        if (event) {
            window.location.reload();
        }
    }


    const handleSearch = (event) => {
        event.preventDefault();
        event.stopPropagation();

        let text = event.target.value;
        
        setSearch(text);
        
        // window.location.reload();
    }

    // Return HTML
    if (searchData.length < 1) {
        return (
            <div id="loading">LOADING</div>
        )
    }

    // else if (search == '') {
    //     return (
    //         <div>NO EMPTY SEARCHES</div>
    //     )
    // }

    else {
        return (
            <div>
            <form className = 'search-form'>
                <input className = 'form-control shadow rounded' type = 'search' onChange = {handleSearch} placeholder = '' aria-label = 'search'></input>
                    <Link
                        to = {{
                            pathname: '/search',
                            searchProps: { search, lsCity, lsLat, lsLong, }
                        }}
                            className = 'search-link'
                    >
                        <div id="srch-div">
                        <button id="srch-button" className = 'btn btn-dark search-button shadow-lg' type = 'button' onClick = {handleRefresh}>
                            Search
                        </button>
                        </div>
                    </Link>

                    {/* <button className = 'btn btn-dark search-button' type = 'button' onClick = {handleRefresh}>
                        Search
                    </button> */}
                
            </form>

            <table className = 'table table-sortable text-center'>
                <thead>
                    <tr>
                        <th scope = 'col'>Name</th>
                        <th scope = 'col'>Genre</th>
                        <th scope = 'col'>Type</th>
                        <th scope = 'col'>City, State</th>
                        <th scope = 'col'>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {searchData.map((thing) => {
                        const artistName = thing.artist_name;
                        const venueName = thing.venue_name;
                        const lat = thing.lat;
                        const long = thing.long;
                        const genre1 = thing.genre_one;
                        const genre2 = thing.genre_two;
                        const genre3 = thing.genre_three;
                        const city = thing.city;
                        const state = thing.state;
                        

                        for (let i = 0; i < searchData.length; i++) {
                            if (searchData[i].artist_name) {
                                searchData[i].type = 'Artist';
                                searchData[i].route = `/artists/${thing.id}`;
                            }
                            else if (searchData[i].venue_name) {
                                searchData[i].type = 'Venue';
                                searchData[i].route = `/venues/${thing.id}`;
                            }
                        }

                        const type = thing.type;
                        const route = thing.route;


                        return (
                            <tr key = {thing.id}>
                                <td>
                                    <Link
                                        to = {route}
                                    >
                                        {artistName || venueName}
                                    </Link>
                                </td>
                                {genre1
                                ? <td>{genre1}, {genre2}, {genre3}</td>
                                : <td></td>
                                }
                                <td>{type}</td>
                                <td>{city}, {state}</td>
                                <td>{haversine(
                                    localStorage.getItem('lat'),
                                    localStorage.getItem('long'),
                                    lat,
                                    long
                                )} miles</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}