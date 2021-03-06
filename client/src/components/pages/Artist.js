import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/Home.css";
import "../css/Artist.css";
import axios from "axios";

function Artist() {
  const [artist, setArtist] = useState({});
  const [shows, setShows] = useState([]);  

  useEffect(() => {
    axios
      .get(
        "/api/artists/" +
          window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
          )
      )
      .then((data) => {
        setArtist(data.data);
        console.log(data)
      })
      getShows();
  }, []);

const getShows = () => {
    axios
      .get(
        "/api/artists/" +
          window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
          ) +
          "/shows"
      )
      .then((showData) => {
        console.log(showData.data);
        setShows(showData.data);
        console.log("test:", shows);
      });
  }
  if(shows.length> 0) {
    var dateObj = new Date(shows[0].date);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    console.log('date ???', month, day,year)
  }
  const formateDate = (date)=> {
    var finalStr = ''

    var dateObj = new Date(shows[0].date);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    console.log('date ???', month, day,year)
    finalStr+= month + '/' + day + '/' + year
    return finalStr
  }

  const formatTime = (time)=> {
    var finalStr = ''
    var hour = parseInt(time.split(':')[0])
    if(hour > 12) {
      hour = hour - 12
      finalStr+= hour +' P.M.'
    } else {
      finalStr+= hour +' A.M.'
    }
    console.log('time!', hour)
    return finalStr
  }
  
    return (
      <div className="container-fluid" id="artist-main-box">
        <div className="row" id="test">
          <div className="col-md-6 col-sm-12" id="bio-box">
            <div id="bio-content">
              <h1 className="text-center">{artist.artist_name}</h1>
              <h3 className="text-center">{artist.city}, {artist.state}</h3> 
              <div id="image-box">
                {artist.imgur_url ? <img id="profile-image" src={artist.imgur_url} alt={artist.artist_name} /> : null}
              {/* <img id="profile-image" src={artist.imgur_url ? artist.imgur_url : "https://i.imgur.com/K91SDKI.jpg" }/> */}
              </div>
              <h3 className="text-center">{artist.genre_one}, {artist.genre_two}, {artist.genre_three} </h3>
              <h4 className="text-center">{artist.bio}</h4>
              <div className="text-center"><span>contact: </span><a href={"mailto:" + artist.email}>{artist.email}</a> </div>
            </div>
          </div>
          
          <div className="col-md-6 col-sm-12" id="events-media-box">
            <div id="upcoming-shows">
              <h3 id="up-show" className="text-center">upcoming shows</h3>
              <div className="text-center">
              { shows ? (shows.map((show) => 
              ( 
                <div className="upcoming-shows">
                <Link to={"/shows/" + show.id}>
                <div>{show.venue.venue_name}</div></Link>
                <div id="show-time">{formateDate(show.date)} - {formatTime(show.time)}</div>
                </div>

              ))) : <p>This artist has no upcoming shows</p>}
              </div>
            </div>
            <div id="media-embeds">
              <div id="bandcamps">
                <div
                  dangerouslySetInnerHTML={{
                    __html: artist["bandcamp_one"],
                  }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: artist["bandcamp_two"],
                  }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: artist["bandcamp_three"],
                  }}
                ></div>
              </div>
              <div id="soundclouds">
              <div
                dangerouslySetInnerHTML={{
                  __html: artist["soundcloud_one"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: artist["soundcloud_two"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: artist["soundcloud_three"],
                }}
              ></div>
              </div>
              <div id="youtubes">
              <div className="videoWrapper"
                dangerouslySetInnerHTML={{
                  __html: artist["youtube_one"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: artist["youtube_two"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: artist["youtube_three"],
                }}
              ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Artist;
