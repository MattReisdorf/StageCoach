import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/CreateShow.css";
import "../css/Show.css";
import createShow from '../../utils/showStuff'

// scheduling should be a feature here. we either/or:
// pick a date, and a list of bands in your city WITHOUT shows that day populates
// pick a band, and a list of dates they are free populates

function CreateShow() {
  const [artists, setArtists] = useState([]);
  const [venues, setVenues] = useState([])

  const [newShowData, setNewShowData] = useState({
    date: '',
    time: '',
    description: '',
    venue_id: '',
    artist_id: '',
  })

  const showSubmit = () => {
    createShow.create(newShowData).then((success) => {
      alert("Show created!")
      console.log(success.data)
      return window.location.assign('/')
    }).catch((err) => {
      console.log('Running here...')
      if(err){
        console.log(err)
        alert('Show creation failed')
        return window.location.assign('/shows/create')
      }
    })
  }

  // gets all artists. artistRoutes.js has order: artist_name ASC.
  // current not getting shows for artist. will need to do so if we want to schedule.
  useEffect(() => {
    axios.get("/api/artists").then((artistData) => {
      console.log(artistData.data);
      setArtists(artistData.data);
      console.log("test:", artists);
    })
    getVenues();
  }, []);


const getVenues= () => {
  axios
  .get(
    "/api/venues/" 
      )
  .then((data) => {
    setVenues(data.data);
  })
}

  return (
    <div className="home-background">
      <div className="container">
        <div id="card-contain">
          <div id="main-card" className="card shadow-lg p-3 mb-5 shadow bg-white rounded">
            <h5 id="card-header" className="card-header">Let's schedule a show.</h5>
            <div className="card-body">
              <form>
                {/* date label + input */}
                <div className="input-group mb-3" id="date-input">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Date:
                  </span>
                  <input
                    type="date"
                    id="show-date"
                    aria-label="Date"
                    aria-describedby="basic-addon1"
                    onChange={(event) => setNewShowData({...newShowData, date: event.target.value})}
                  />
                </div>
                {/* time label + input */}
                <div className="input-group mb-3" id="time-input">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Time:
                  </span>
                  <input
                    type="time"
                    id="show_time"
                    aria-label="Time"
                    aria-describedby="basic-addon1"
                    onChange={(event) => setNewShowData({...newShowData, time: event.target.value})}
                  />
                </div>
                {/* artist select. this looks bad right now. maybe have it input rather than select but still with options */}
                <div className="input-group mb-3" id="artist-input">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Artist:
                  </span>
                  <select
                    className="form-select"
                    size="3"
                    aria-label="size 3 select example"
                    onChange={(event) => setNewShowData({...newShowData, artist_id: event.target.value})}
                  >
                    {artists ? (
                      artists.map((artist) => (
                        <option label={artist.artist_name}>{artist.id}</option>
                      ))
                    ) : (
                      <option>no artists to display</option>
                    )}
                  </select>
                </div>
                {/* placeholder venue field */}
                <div className="input-group mb-3" id="artist-input">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Venue:
                  </span>
                  <select
                    className="form-select"
                    size="3"
                    aria-label="size 3 select example"
                    onChange={(event) => setNewShowData({...newShowData, venue_id: event.target.value})}
                  >
                    {venues ? (
                      venues.map((venue) => (
                        <option label={venue.venue_name}>{venue.id}</option>
                      ))
                    ) : (
                      <option>no artists to display</option>
                    )}
                  </select>
                </div>
                {/* description field */}
                <div className="input-group mb-3" id="description-input">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Show description:
                  </span>
                  <input
                    type="text"
                    id="show-description"
                    className="form-control input_values venue_input_values"
                    aria-label="description"
                    aria-describedby="basic-addon1"
                    onChange={(event) => setNewShowData({...newShowData, description: event.target.value})}
                  />
                </div>
                <div id="create-button">
                <button id="sub-but" type="submit" className="btn btn-primary btn-lg shadow-lg p-3 mb-5 bg-white rounded" onClick={() => showSubmit()}>
            Create Show
          </button>
          </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShow;
