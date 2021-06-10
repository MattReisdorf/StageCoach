import React, { useState, useEffect } from "react";
import "../css/Home.css";
import axios from "axios";

function Artist() {
  const [show, setShow] = useState([]);  

  useEffect(() => {
    axios
      .get(
        "/api/shows/" +
          window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
          )
      )
      .then((data) => {
        setShow(data.data);
        console.log(data.data)
      })
  }, []);

//   time_formed needed
//      show.artist.artist_name should also link to artist page, show.venue.venue_name should link to venue page.

    return (
      <div className="container-fluid" id="show-main-box">
         <div className="show-card">
            {show.artist ? 
            <div><h2> {show.artist.artist_name} at {show.venue.venue_name}</h2>
            <h5>{show.date_formed}, {show.time}</h5>
            <img id="profile-image" src={show.artist.imgur_url ? show.artist.imgur_url : "https://i.imgur.com/K91SDKI.jpg" }/>

            </div>
            : "bye"}
         </div>
        </div>
    );
  }


export default Artist;
