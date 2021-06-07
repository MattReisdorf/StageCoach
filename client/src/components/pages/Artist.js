import React, { Component } from "react";
import "../css/Home.css";
import axios from "axios"

class Artist extends Component {

    state = {
        artist: {}
    }

    componentDidMount() {
        axios.get("/api/artists/" + window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1)).then(data => {
            console.log('dataaaa', data)
            this.setState({
                artist: data.data
            })
        })
    }
  render() {
    console.log(
      this.state
    );
    return (
      <div className="home-background">
        <div className="container-fluid">
          <div className="howdy text-center">
            <h1>{this.state.artist.artist_name}</h1>
            <h3>{this.state.artist.city}</h3>
            <h4>{this.state.artist.bio}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;
