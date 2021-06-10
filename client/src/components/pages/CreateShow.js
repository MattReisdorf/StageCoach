import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/CreateShow.css";
import "../css/Signup.css";

// scheduling should be a feature here. we either/or:
// pick a date, and a list of bands in your city WITHOUT shows that day populates
// pick a band, and a list of dates they are free populates

function CreateShow() {
  const [artists, setArtists] = useState([]);

  // gets all artists. artistRoutes.js has order: artist_name ASC.
  // current not getting shows for artist. will need to do so if we want to schedule.
  useEffect(() => {
    axios.get("/api/artists").then((artistData) => {
      console.log(artistData.data);
      setArtists(artistData.data);
      console.log("test:", artists);
    });
  }, []);

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
                  />
                </div>
                {/* artist select. this looks bad right now. maybe have it input rather than select but still with options */}
                <div className="input-group mb-3" id="artist-input">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Artists:
                  </span>
                  <select
                    className="form-select"
                    size="3"
                    aria-label="size 3 select example"
                  >
                    {artists ? (
                      artists.map((artist) => (
                        <option>{artist.artist_name}</option>
                      ))
                    ) : (
                      <p>This venue has no upcoming shows</p>
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
                    id="venue_username"
                    className="form-control input_values venue_input_values"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div id="create-button">
                <button id="sub-but" type="submit" className="btn btn-primary btn-lg shadow-lg p-3 mb-5 bg-white rounded">
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
