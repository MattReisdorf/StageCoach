import React, { useState, useEffect } from "react";
import "../css/Home.css";
import axios from "axios";
import { Link } from "react-router-dom"

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
      <div id="card-contain">
        <div className="card shadow-lg p-3 mb-5 shadow bg-white rounded">
      <div className="container-fluid" id="show-main-box">
         <div className="show-card text-center">
            {show.artist ? 
            <div> <h1 id="show-h1"> <Link id="show-h1" to={"/artists/" + show.artist_id} className="show-links">
            {show.artist.artist_name} 
          </Link> At <Link id="show-h1" to={"/venues/" + show.venue_id} className="show-links">
            {show.venue.venue_name} 
          </Link> </h1> 
              {/* <h2> {show.artist.artist_name} at {show.venue.venue_name}</h2> */}
            <h5>{show.date_formed}, {show.time}</h5>
            <h3> {show.venue.all_ages ? "All Ages Show" : null }
                 {show.venue.eighteen_plus ? "18+" : null }
                 {show.venue.twentyone_plus ? "21+" : null }
            </h3>
            
            <div id="profile-image-div">
            <img id="profile-image" src={show.artist.imgur_url ? show.artist.imgur_url : "https://i.imgur.com/K91SDKI.jpg" }/>
            </div>

            </div>
            : "bye"}
         </div>
        </div>
        </div>
        </div>
    );
  }


export default Artist;
