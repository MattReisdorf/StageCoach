import React, { Component } from "react";
import "../css/Home.css";
import "../css/Venue.css";
import axios from "axios";

class Venue extends Component {
  state = {
    venue: {},
  };

  componentDidMount() {
    axios
      .get(
        "/api/venues/" +
          window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
          )
      )
      .then((data) => {
        console.log("dataaaa", data);
        this.setState({
          venue: data.data,
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="container-fluid" id="artist-main-box">
        <div className="row" id="test">
          <div className="col-md-6 col-sm-12" id="bio-box">
            <div id="bio-content">
              <h1>{this.state.venue.venue_name}</h1>
              <h3>
                {this.state.venue.city}, {this.state.venue.state}
              </h3>

              <img
                id="profile-image"
                src={this.state.venue.image_one}
              />
              <h3>{this.state.venue.bio}</h3>
              <div>
                <span>contact: </span>
                <a href={"mailto:" + this.state.venue.email}>
                  {this.state.venue.email}
                </a>{" "}
              </div>
            </div>
            <div id="boolean-icons">
                <h4>{this.state.venue.has_bar ? "booze" : "no booze"}</h4>
                <h4>{this.state.venue.all_ages ? "all ages" : "18+"}</h4>
                <h4>{this.state.venue.has_food ? "food" : "no food"}</h4>
            </div>
          </div>

          <div className="col-md-6 col-sm-12" id="events-media-box">
            <div id="upcoming-shows">
              <h3 id="upcoming">Upcoming Shows</h3>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Venue;
