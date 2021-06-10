import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import axios from 'axios';
import haversine from '../../utils/Haversine-Formula';
// import { Artist, Venue } from '../../../../models';

// const express = require('express');
// app.use(express);
// const db = require('../../../../models');


export default function Search(props) {
    
    // States
    const [searchData, setSearchData] = useState([])
    // const [search, setSearch] = useState('');
    const [sortDirections, setSortDirections] = useState({ name: '', type: '', distance: '' })




  
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
        }

        return searchResults;
    }
    
    // Set Search State in useEffect
    useEffect(async () => {
        setSearchData(await filterData(props.location.searchProps.search));
    }, [])

    console.log(searchData);
  
  


    // const handleSearch = (event) => {
    //     event.preventDefault();

    //     let text = event.target.value;
    //     // console.log(text);
    //     setSearch(text);
    // }

    // Return HTML
    if (searchData.length < 1) {
        return (
            <div>LOADING</div>
        )
    }

    else if (props.location.searchProps.search == '') {
        return (
            <div>NO EMPTY SEARCHES</div>
        )
    }

    else {
        return (
            <div>
            {/* <form className = 'search-form'>
                <input className = 'form-control' type = 'search' onChange = {handleSearch} placeholder = '' aria-label = 'search'></input>
                    <Link
                        to = {{
                            pathname: '/search',
                            searchProps: props.location.searchProps
                        }}
                            className = 'search-link'
                    >
                        <button className = 'btn btn-dark search-button' type = 'submit'>
                            Search
                        </button>
                    </Link>
                
            </form> */}

            <table className = 'table table-sortable text-center'>
                <thead>
                    <tr>
                        <th scope = 'col'>Name</th>
                        <th scope = 'col'>Type</th>
                        <th scope = 'col'>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {searchData.map((thing) => {
                        const artistName = thing.artist_name;
                        const venueName = thing.venue_name;
                        const lat = thing.lat;
                        const long = thing.long;
                        

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
                                <td>{type}</td>
                                <td>{haversine(
                                    props.location.searchProps.lat,
                                    props.location.searchProps.long,
                                    lat,
                                    long
                                )}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        )
        



    }












//     const [searchData, setSearchData] = useState([])
//     const [artistDataArray, setArtistDataArray] = useState([])
//     const artistData = [];



//     //WITH POORNIMA
//     const getArtistLatLong = async (city, state, artistData, i) => {

//         console.log('before await');
//         await axios
//             .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&appid=b432d6bb20293207031c4335d6e23edb`)
//             .then((res) => {
//                 // console.log('latitude', res.data[0].lat);
//                 // console.log('longitude', res.data[0].lon);
//                 // console.log('this is res', res);    
//                 artistData[i].lat = String(res.data[0].lat);
//                 // console.log(artistData[i].lat);
//                 artistData[i].lon = String(res.data[0].lon);
//             })
//     }

//     // console.log('these are the props', props.location.searchProps);
   
//     useEffect(async () => {
//         await axios.all([
//             axios.get('api/artists'),
//             axios.get('api/venues')
//         ])
//         .then(
//             axios.spread((...results) => {
//             artistData.push(...results[0].data)
//             // console.log('artist data array', artistData);
//             const venueData = results[1].data;
//             let allData = []

//             for (let i = 0; i < artistData.length; i++) {
//                 // NEED TO MAKE OWAPI CALL FOR DISTANCES
//                 // BEFORE POORNIMA
//                 // await axios
//                 //     .get(`http://api.openweathermap.org/geo/1.0/direct?q=${artistData[i].city},${artistData[i].state},US&appid=b432d6bb20293207031c4335d6e23edb`)
//                 //     .then((res) => {
//                 //         // console.log('latitude', res.data[0].lat);
//                 //         // console.log('longitude', res.data[0].lon);

//                 //         artistData[i].lat = String(res.data[0].lat);
//                 //         artistData[i].lon = String(res.data[0].lon);
//                 //     })

//                 getArtistLatLong(artistData[i].city, artistData[i].state, artistData, i)
//                     .then((data) => {
//                         // console.log('this is the data', artistData[i]);
//                         allData.push(artistData[i])
//                         console.log('inside .then', allData, allData.length);
//                         setArtistDataArray(allData)
                        
//                     })

//                 // allData.push(artistData[i])
//             }

//             // console.log('this is all data', allData)
//             // console.log(allData.length);

//             for (let j = 0; j < venueData.length; j++) {

//                 axios
//                     .get(`http://api.openweathermap.org/geo/1.0/direct?q=${venueData[j].city},${venueData[j].state},US&appid=b432d6bb20293207031c4335d6e23edb`)
//                     .then((res) => {
//                         venueData[j].lat = String(res.data[0].lat)
//                         venueData[j].lon = String(res.data[0].lon)
//                     })

//                 allData.push(venueData[j])
//             }








//             let searchResults = [];

//                 for (let i = 0; i < artistDataArray.length; i++) {



//                     // do the same thing as artistDataArray
//                     if(artistDataArray[i].artist_name) {

//                         if (artistDataArray[i].artist_name.toLowerCase().includes(props.location.searchProps.search.toLowerCase()))
//                         {
//                             searchResults.push(artistDataArray[i]);

//                         }
//                     } 
                    
//                     else if (allData[i].venue_name){
//                         if (allData[i].venue_name.toLowerCase().includes(props.location.searchProps.search.toLowerCase()))
//                         {
//                             searchResults.push(allData[i]);
//                         }
//                     }
//                 }
//                 console.log('search results', searchResults);
//                 setSearchData(searchResults) 

//         }))
//     }, [])

    

//     // console.log(searchData);
    
    
//     console.log(searchData);

//     if (props.location.searchProps.search === '') {
//         return <div>NO EMPTY SEARCHES</div>
//     }

//     else if (searchData.length == 0) {
//         return (
//             <div>NO RESULTS FOUND</div>
//         )
//     }

//     else {
//         return(

//             <table className = 'table table-sortable text-center'>
//                 <thead>
//                     <tr>
//                         <th scope = 'col'>Name</th>
//                         <th scope = 'col'>Type</th>
//                         <th scope = 'col'>Distance</th>
//                         <th scope = 'col'>Genre</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {searchData.map((thing) => {
//                         const artistName = thing.artist_name;
//                         const venueName = thing.venue_name;
//                         const lat = thing.lat;
//                         const long = thing.lon;
//                         console.log('this is the thing', thing.lon);
                        
//                         for (let i = 0; i < searchData.length; i++) {
//                             if (searchData[i].artist_name) {
//                                 searchData[i].type = 'Artist'
//                             }
//                             else if (searchData[i].venue_name) {
//                                 searchData[i].type = 'Venue'
//                             }
//                         }

//                         const type = thing.type;
    
//                         return (
//                             <tr key = {thing.id}>
//                                 <td>{artistName || venueName}</td>
//                                 <td>{type}</td>
//                                 <td>
//                                     {haversine(
//                                         props.location.searchProps.lat,
//                                         props.location.searchProps.long, 
//                                         lat, 
//                                         long
//                                     )}
//                                 </td>
//                                 <td>{thing.genre_one}</td>
//                             </tr>
//                         ) 
//                     })}
                    
//                 </tbody>
//             </table>
//         )
//     }
    

}