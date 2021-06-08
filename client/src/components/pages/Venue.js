import React, { Component, useState, useEffect } from "react";
import "../css/Home.css";
import "../css/Venue.css";
import axios from "axios";
import { BiIdCard, BiBeer } from "react-icons/bi";
import { IoFastFoodOutline as Food } from "react-icons/io5";
import { FaChild as Child } from "react-icons/fa";

// class Venue extends Component {
//   state = {
//     venue: {},
//     tabState: 1,
//   };

function Venue() {
  const [venue, setVenue] = useState({});
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
        console.log("dataaaa", data);
        setVenue(data.data);
      });
  }, []);

  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

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
              <span>contact: </span>
              <a href={"mailto:" + venue.email}>{venue.email}</a>{" "}
            </div>
          </div>
          <div id="boolean-icons">
            {venue.has_bar ? (
              <span>
                <BiBeer /> Has bar
              </span>
            ) : (
              <></>
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
              <></>
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
              <span>{venue.contact_title}: {venue.contact_name}</span>
              <br />
              <span>
              Phone: {venue.contact_number}
              <br/>
              Email: {venue.contact_email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venue;
