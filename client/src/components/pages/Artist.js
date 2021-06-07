import React, { Component } from "react";
import "../css/Home.css";
import "../css/Artist.css";
import axios from "axios";

class Artist extends Component {
  state = {
    artist: {},
  };

  componentDidMount() {
    axios
      .get(
        "/api/artists/" +
          window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
          )
      )
      .then((data) => {
        console.log("dataaaa", data);
        this.setState({
          artist: data.data,
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
              <h1>{this.state.artist.artist_name}</h1>
              <h3>{this.state.artist.city}, {this.state.artist.state}</h3> 

              <img id="profile-image" src="https://media.vanityfair.com/photos/5d0bf443a2036c7015753f28/16:9/w_1407,h_791,c_limit/The-Muppet-Movie-The-Rainbow-Connection.jpg"/>

              <h3>{this.state.artist.genre_one}, {this.state.artist.genre_two}, {this.state.artist.genre_three} </h3>
              <h4>{this.state.artist.bio}</h4>
              <div><span>contact: </span><a href={"mailto:" + this.state.artist.email}>{this.state.artist.email}</a> </div>
            </div>
          </div>
          
          <div className="col-md-6 col-sm-12" id="events-media-box">
            <div id="upcoming-shows">
              <h3>upcoming shows</h3>
            </div>
            <div id="media-embeds">
              <div id="bandcamps">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.artist["bandcamp_one"],
                  }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.artist["bandcamp_two"],
                  }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.artist["bandcamp_three"],
                  }}
                ></div>
              </div>
              <div id="soundclouds">
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.artist["soundcloud_one"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.artist["soundcloud_two"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.artist["soundcloud_three"],
                }}
              ></div>
              </div>
              <div id="youtubes">
              <div className="videoWrapper"
                dangerouslySetInnerHTML={{
                  __html: this.state.artist["youtube_one"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.artist["youtube_two"],
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.artist["youtube_three"],
                }}
              ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;
