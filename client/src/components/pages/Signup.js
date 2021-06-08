import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import "../css/Signup.css";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";

function Signup() {
  //   const [youtube, setYoutube] = React.useState(false);
  //   const [bandcamp, setBandcamp] = React.useState(false);
  //   const [soundcloud, setSoundcloud] = React.useState(false);

  const [mediaState, setMediaState] = React.useState("-");
  const [linkState, setLinkState] = React.useState("");

  function stateChange(e) {
    console.log("eeeeeee!!!", e);
    if (e === "YouTube") {
      setMediaState("YouTube");
    } else if (e === "BandCamp") {
      setMediaState("BandCamp");
    } else if (e === "SoundCloud") {
      setMediaState("SoundCloud");
    }
  }

  const [youtubeLinks, setYoutubeLinks] = React.useState([]);
  const [soundcloudLinks, setsoundcloudLinks] = React.useState([]);
  const [bandcampLinks, setbandcampLinks] = React.useState([]);

  const handleMediaAdd = async (linkType) => {
    // e.preventDefault();
    console.log("Link state!!", linkState);
    if (linkType === "YouTube") {
      setYoutubeLinks([...youtubeLinks, linkState]);
    } else if (linkType === "SoundCloud") {
      setsoundcloudLinks([...soundcloudLinks, linkState]);
    } else if (linkType === "BandCamp") {
      setbandcampLinks([...bandcampLinks, linkState]);
    }

    setLinkState("");
    setMediaState("-");

    // setYoutube(false);
    // console.log(youtubeLinks);
  };

  // const [toggleState, setToggleState] = React.useState(1);

  console.log(
    "Meida link arrrayyy",
    youtubeLinks,
    soundcloudLinks,
    bandcampLinks
  );

  const [signupType, setSignupType] = React.useState("");

  let type = signupType;
  let signUpForm;

  useEffect(() => {
    axios
      .get(
        "/api/signup/" +
          window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
          )
      )
      .then((data) => {
        console.log("dataaaa", data);
      });
    // console.log(youtube);
  }, []);

  // Venue Sign Up Page
  if (type === "Venue") {
    signUpForm = (
      <div>
        <div
          className="modal fade"
          id="embedModal"
          tabindex="-1"
          aria-labelledby="embedModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  How to embed a link!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="picModal"
          tabindex="-1"
          aria-labelledby="picModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  How to add a profile pic!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Username:
            </span>
            <input
              type="text"
              id="venue_username"
              className="form-control input_values venue_input_values"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Email:
            </span>
            <input
              type="email"
              id="venue_email"
              className="form-control input_values venue_input_values"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password:
            </span>
            <input
              type="password"
              id="venue_password"
              className="form-control input_values venue_input_values"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Confirm Password:
            </span>
            <input
              type="Password"
              id="venue_password_confirm"
              className="form-control input_values venue_input_values"
              placeholder="Confirm Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Address:
            </span>
            <input
              type="text"
              id="venue_address"
              className="form-control input_values venue_input_values"
              placeholder="Venue's Address"
              aria-label="Address"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              City:
            </span>
            <input
              type="text"
              id="venue_city"
              className="form-control input_values venue_input_values"
              placeholder="City Name"
              aria-label="City"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              State:
            </span>
            <select
              className="form-select input_values venue_input_values"
              aria-label="City"
              aria-describedby="basic-addon1"
              id="venue_state"
            >
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>HI</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>IA</option>
              <option>KS</option>
              <option>KY</option>
              <option>LA</option>
              <option>ME</option>
              <option>MD</option>
              <option>MA</option>
              <option>MI</option>
              <option>MN</option>
              <option>MS</option>
              <option>MO</option>
              <option>MT</option>
              <option>NE</option>
              <option>NV</option>
              <option>NH</option>
              <option>NJ</option>
              <option>NM</option>
              <option>NY</option>
              <option>NC</option>
              <option>ND</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VT</option>
              <option>VA</option>
              <option>WA</option>
              <option>WV</option>
              <option>WI</option>
              <option>WY</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Venue Name:
            </span>
            <input
              type="text"
              id="venue_name"
              className="form-control input_values venue_input_values"
              placeholder="Your venue's name here!"
              aria-label="Venue"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Bio:
            </span>
            <textarea
              type="text"
              id="venue_bio"
              className="form-control input_values venue_input_values"
              placeholder="Tell us about yourself!"
              aria-label="Bio"
              aria-describedby="basic-addon1"
            />
          </div>
          <h1>Extraaaaa!</h1>
          <div>
            <h2>Minimum age to enter:</h2>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault">
                All Ages
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="eighteen_plus"
              />
              <label class="form-check-label" for="flexRadio">
                18+
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="twentyone_plus"
              />
              <label class="form-check-label" for="flexRadio">
                21+
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Submit!
          </button>
        </form>
      </div>
    );
  }

  // Artist Sign Up Page
  else if (type === "Artist") {
    signUpForm = (
      <div>
        <div
          className="modal fade"
          id="embedModal"
          tabindex="-1"
          aria-labelledby="embedModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  How to embed a link!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="picModal"
          tabindex="-1"
          aria-labelledby="picModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  How to add a profile pic!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Username:
            </span>
            <input
              type="text"
              id="artist_username"
              className="form-control input_values artist_input_values"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Email:
            </span>
            <input
              type="email"
              id="artist_email"
              className="form-control input_values artist_input_values"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password:
            </span>
            <input
              type="password"
              id="artist_password"
              className="form-control input_values artist_input_values"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Confirm Password:
            </span>
            <input
              type="Password"
              id="artist_password_confirm"
              className="form-control input_values artist_input_values"
              placeholder="Confirm Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              City:
            </span>
            <input
              type="text"
              id="artist_city"
              className="form-control input_values artist_input_values"
              placeholder="City Name"
              aria-label="City"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              State:
            </span>
            <select
              className="form-select input_values venue_input_values"
              aria-label="State"
              aria-describedby="basic-addon1"
              id="venue_state"
            >
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>HI</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>IA</option>
              <option>KS</option>
              <option>KY</option>
              <option>LA</option>
              <option>ME</option>
              <option>MD</option>
              <option>MA</option>
              <option>MI</option>
              <option>MN</option>
              <option>MS</option>
              <option>MO</option>
              <option>MT</option>
              <option>NE</option>
              <option>NV</option>
              <option>NH</option>
              <option>NJ</option>
              <option>NM</option>
              <option>NY</option>
              <option>NC</option>
              <option>ND</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VT</option>
              <option>VA</option>
              <option>WA</option>
              <option>WV</option>
              <option>WI</option>
              <option>WY</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Artist Name:
            </span>
            <input
              type="text"
              id="artist_name"
              className="form-control input_values artist_input_values"
              placeholder="Your band / artist name here!"
              aria-label="Artist"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Bio:
            </span>
            <textarea
              type="text"
              id="artist_bio"
              className="form-control input_values artist_input_values"
              placeholder="Tell us about yourself!"
              aria-label="Bio"
              aria-describedby="basic-addon1"
            />
          </div>
          <h1 id="h1media">Adding media will help you get noticed...</h1>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#picModal"
          >
            Help me add a profile pic!
          </button>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Profile Pic:
            </span>
            <input
              type="text"
              id="imgur_url"
              className="form-control input_values artist_input_values"
              placeholder="Upload a photo! Imgur links only please."
              aria-label="imgur_url"
              aria-describedby="basic-addon1"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#embedModal"
          >
            Help me embed!
          </button>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Upload Media:
            </span>
            <select
              onChange={(e) => stateChange(e.target.value)}
              value={mediaState}
              className="form-select input_values venue_input_values"
              aria-label="Media"
              aria-describedby="basic-addon1"
              id="artist-media"
            >
              <option value={"-"}>-</option>
              <option value="YouTube"> YouTube</option>
              <option value="BandCamp"> Bandcamp</option>
              <option value="SoundCloud"> Soundcloud</option>
            </select>
          </div>
          {youtubeLinks.map((youtube) => (
            <p>Youtube Link! {youtube}</p>
          ))}
          {soundcloudLinks.map((sc) => (
            <p>Sound CLoud Link {sc}</p>
          ))}
          {bandcampLinks.map((bc) => (
            <p>BandCamp Link! {bc}</p>
          ))}
          {mediaState !== "-" ? (
            <div>
              <form>
                <input
                  type="text"
                  id="website_url"
                  className="form-control input_values artist_input_values table_values"
                  placeholder={`Enter embedded ${mediaState} link here...`}
                  aria-label="website_url"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setLinkState(e.target.value);
                  }}
                />
                <button
                  onClickCapture={(e) => handleMediaAdd(mediaState)}
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Add Media
                </button>
              </form>
            </div>
          ) : (
            <div></div>
          )}

          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Website</th>
                <th scope="col">Bandcamp</th>
                <th scope="col">Soundcloud</th>
                <th scope="col">Spotify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="website_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Your website URL here!"
                      aria-label="website_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="bandcamp_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Your bandcamp URL here!"
                      aria-label="bandcamp_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="soundcloud_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Your soundcloud URL here!"
                      aria-label="soundcloud_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="spotify_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Your spotify URL here!"
                      aria-label="spotify_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="btn btn-primary btn-lg">
            Submit!
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="home-background">
      <div className="container">
        <h1 id="top-signup">Sign up as a...</h1>

        {/* <form>
                        <div className = 'form-group'>
                            <label htmlFor = 'artistOrVenue'>Artist or Venue?</label>
                            <select className = 'form-select' id = 'artistOrVenueID'>
                                <option>Artist</option>
                                <option>Venue</option>
                            </select>
                        </div>

                        <div className = 'form-group' id = 'artistSignup' style = {{display: 'none'}}>
                            <label htmlFor = 'artistName'>Artist Name:</label>
                            <input type = 'text' className = 'form-control' required></input>
                        </div>
                    </form> */}
        <div className="d-flex justify-content-center">
          <button id="set-signup" onClick={() => setSignupType("Artist")}>
            Artist
          </button>
          <p id="or" className="d-flex justify-content-center">
            or
          </p>
          <button id="set-signup" onClick={() => setSignupType("Venue")}>
            Venue
          </button>
        </div>

        {signUpForm}
        {/* <div className = 'calendar-placeholder'>
                        <h4>Week's Worth of Shows</h4>
                    </div> */}
      </div>
    </div>
  );
}

export default Signup;
