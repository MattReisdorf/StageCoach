import React, { Component, useState, useEffect } from "react";
import "../css/Home.css";
import "../css/Venue.css";
import axios from "axios";
import { BiIdCard, BiBeer } from "react-icons/bi";
import {
  IoFastFoodOutline as Food,
  IoLogoFacebook as Facebook,
  IoLogoTwitter as Twitter,
  IoLogoInstagram as Instagram,
} from "react-icons/io5";
import { FaChild as Child, FaTimes as XIcon } from "react-icons/fa";

function Venue() {
  const [venue, setVenue] = useState({});
  const [shows, setShows] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  

  useEffect(() => {
    axios
      .get(
        "/api/venues/" +
          window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
          )
      )
      .then((data) => {
        setVenue(data.data);
      })
      getShows();
  }, []);

  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

const getShows = () => {
    axios
      .get(
        "/api/venues/" +
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
    <div className="container-fluid" id="venue-main-box">
      <div className="row" id="test">
        <div className="col-md-6 col-sm-12" id="bio-box">
          <div id="bio-content">
            <h1>{venue.venue_name}</h1>
            <h3>
              {venue.city}, {venue.state}
            </h3>

            <img id="profile-image" src={venue.image_one} />
            <h3>{venue.bio}</h3>
            <div>
              {venue.external_social_facebook ? (
                <a
                  className="social-icons"
                  href={venue.external_social_facebook}
                >
                  <Facebook />
                </a>
              ) : null}
              {venue.external_social_instagram ? (
                <a
                  className="social-icons"
                  href={venue.external_social_instagram}
                >
                  <Instagram />
                </a>
              ) : null}
              {venue.external_social_twitter ? (
                <a
                  className="social-icons"
                  href={venue.external_social_twitter}
                >
                  <Twitter />
                </a>
              ) : null}
            </div>
          </div>
          <div id="boolean-icons">
            {venue.has_bar ? (
              <span>
                <BiBeer /> Has bar
              </span>
            ) : (
              <span>
                <XIcon /> No Bar
              </span>
            )}
            {venue.all_ages ? (
              <span>
                <Child /> All Ages
              </span>
            ) : (
              <></>
            )}
            {venue.eighteen_plus ? (
              <span>
                <BiIdCard /> 18+
              </span>
            ) : (
              <></>
            )}
            {venue.twentyone_plus ? (
              <span>
                <BiIdCard /> 21+
              </span>
            ) : (
              <></>
            )}
            {venue.has_food ? (
              <span>
                <Food /> Has food
              </span>
            ) : (
              <span>
                <XIcon /> No Food
              </span>
            )}
          </div>
        </div>
        <div className="col-md-6 col-sm-12" id="events-media-box">
          <div className="" id="venue-nav-tabs">
            <button
              type="button"
              className={
                toggleState === 1 ? "btn btn-clicked" : "btn btn-secondary"
              }
              onClick={() => toggleTab(1)}
            >
              Shows
            </button>
            <button
              type="button"
              className={
                toggleState === 2 ? "btn btn-clicked" : "btn btn-secondary"
              }
              onClick={() => toggleTab(2)}
            >
              Specs
            </button>
            <button
              type="button"
              className={
                toggleState === 3 ? "btn btn-clicked" : "btn btn-secondary"
              }
              onClick={() => toggleTab(3)}
            >
              Booking
            </button>
          </div>
          <div id="right-panel-main">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
              id="shows-view"
            >
              <h3>Upcoming Shows</h3>
              { shows ? (shows.map((show) => 
              ( 
                <div className="upcoming-shows">
                <div>{show.description}</div>
                <div>{formateDate(show.date)} at {formatTime(show.time)}</div>
                </div>

              ))) : <p>This venue has no upcoming shows</p>}

            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
              id="specs-view"
            >
              <h3>Venue Specs</h3>
              <div>Capacity: {venue.specs_capacity}</div>
              <div>Technical information: {venue.specs_description}</div>
            </div>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
              id="booking-view"
            >
              <h3>Booking</h3>
              <span>
                For booking inquiries at {venue.venue_name} please contact:
              </span>
              <br />
              <span>
                {venue.contact_title}: {venue.contact_name}
              </span>
              <br />
              <span>
                Phone: {venue.contact_number}
                <br />
                Email:{" "}
                <a href={"mailto:" + venue.contact_email}>
                  {venue.contact_email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venue;
