import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import axios from 'axios';
// import { Artist, Venue } from '../../../../models';

// const express = require('express');
// app.use(express);
// const db = require('../../../../models');


export default function Search(props) {

    const [searchData, setSearchData] = useState([])



    // console.log('these are the props', props.location.searchProps);
   
    useEffect(async () => {
        await axios.all([
            axios.get('api/artists'),
            axios.get('api/venues')
        ])
        .then(axios.spread((...results) => {
            const artistData = results[0].data;
            const venueData = results[1].data;
            let allData = []

            for (let i = 0; i < artistData.length; i++) {
                // NEED TO MAKE OWAPI CALL FOR DISTANCES
                axios
                    .get(`http://api.openweathermap.org/geo/1.0/direct?q=${artistData[i].city},${artistData[i].state},US&appid=b432d6bb20293207031c4335d6e23edb`)
                    .then((res) => {
                        console.log('latitude', res.data[0].lat);
                        console.log('longitude', res.data[0].lon);

                        artistData[i].lat = String(res.data[0].lat);
                        artistData[i].lon = String(res.data[0].lon);
                    })

                allData.push(artistData[i])
            }

            for (let j = 0; j < venueData.length; j++) {

                axios
                    .get(`http://api.openweathermap.org/geo/1.0/direct?q=${venueData[j].city},${venueData[j].state},US&appid=b432d6bb20293207031c4335d6e23edb`)
                    .then((res) => {
                        venueData[j].lat = String(res.data[0].lat)
                        venueData[j].lon = String(res.data[0].lon)
                    })

                allData.push(venueData[j])
            }

            let searchResults = [];

                for (let i = 0; i < allData.length; i++) {

                    if(allData[i].artist_name) {

                        if (allData[i].artist_name.toLowerCase().includes(props.location.searchProps.search.toLowerCase()))
                        {
                            searchResults.push(allData[i]);
                        }
                    } 
                    
                    else if (allData[i].venue_name){
                        if (allData[i].venue_name.toLowerCase().includes(props.location.searchProps.search.toLowerCase()))
                        {
                            searchResults.push(allData[i]);
                        }
                    }
                }

                setSearchData(searchResults) 
                
        }))
    }, [])

    

    // console.log(searchData);
    
    
    console.log(searchData);

    if (props.location.searchProps.search === '') {
        return <div>NO EMPTY SEARCHES</div>
    }

    else if (searchData.length == 0) {
        return (
            <div>NO RESULTS FOUND</div>
        )
    }

    else {
        return(

            <table className = 'table table-sortable text-center'>
                <thead>
                    <tr>
                        <th scope = 'col'>Name</th>
                        <th scope = 'col'>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {searchData.map((thing) => {
                        const artistName = thing.artist_name;
                        const venueName = thing.venue_name;
                        
                        for (let i = 0; i < searchData.length; i++) {
                            if (searchData[i].artist_name) {
                                searchData[i].type = 'Artist'
                            }
                            else if (searchData[i].venue_name) {
                                searchData[i].type = 'Venue'
                            }
                        }

                        const type = thing.type;
    
                        return (
                            <tr key = {thing.id}>
                                <td>{artistName || venueName}</td>
                                <td>{type}</td>
                            </tr>
                        ) 
                    })}
                    
                </tbody>
            </table>
        )
    }
    

}