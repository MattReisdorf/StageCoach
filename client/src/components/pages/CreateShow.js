import React, { useEffect } from "react";
import axios from "axios";
import "../css/CreateShow.css";
import "../css/Signup.css";

// scheduling should be a feature here. we either/or:
// pick a date, and a list of bands in your city WITHOUT shows that day populates
// pick a band, and a list of dates they are free populates

function CreateShow() {
  return (
    <div className="home-background">
      <div className="container">
        <div id="card-contain">
          <div className="card shadow-lg p-3 mb-5 shadow bg-white rounded">
            <h5 className="card-header">Let's schedule a show.</h5>
            <div className="card-body">
              <form>
                {/* description  */}
                <div className="input-group mb-3">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Date:
                  </span>
                  <input
                    type="date"
                    id="show_date"
                    aria-label="Date"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
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

                <div className="input-group mb-3">
                  <span className="input-group-text shadow" id="basic-addon1">
                    Artist:
                  </span>
                  <select
                    class="form-select"
                    size="3"
                    aria-label="size 3 select example"
                  >
                    <option selected>Open this select menu</option>
                  </select>
                </div>

                <div className="input-group mb-3">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShow;
