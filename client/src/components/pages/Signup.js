import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import "../css/Signup.css";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";

function Signup() {
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

  const [imgurLinks, setImgurLinks] = React.useState([]);

  const removeImgurLink = imgurLink => {
    const updatedImgurLinks = imgurLinks.filter(remaining => remaining !== imgurLink.img);
    setImgurLinks([...updatedImgurLinks]);
  };

  const removeYoutubeLink = youtubeLink => {
    const updatedYoutubeLinks = youtubeLinks.filter(remaining => remaining !== youtubeLink.youtube);
    setYoutubeLinks([...updatedYoutubeLinks]);
  }

  const removeBandcampLink = bandcampLink => {
    const updatedBandcampLinks = bandcampLinks.filter(remaining => remaining !== bandcampLink.bc);
    setbandcampLinks([...updatedBandcampLinks]);
  }

  const removeSoundcloudLink = soundcloudLink => {
    const updatedSoundcloudLinks = soundcloudLinks.filter(remaining => remaining !== soundcloudLink.sc);
    setsoundcloudLinks([...updatedSoundcloudLinks]);
  }


  const handleMediaAdd = async (linkType) => {
    console.log("Link state!!", linkState);


    if (linkType === "YouTube" && youtubeLinks.length < 3) {
      setYoutubeLinks([...youtubeLinks, linkState]);
    } else if (linkType === "YouTube" && youtubeLinks.length >= 3) {
      alert("Only 3 YouTube links allowed")
    }
    
    else if (linkType === "SoundCloud" && soundcloudLinks.length < 3) {
      setsoundcloudLinks([...soundcloudLinks, linkState]);
    } else if (linkType === "SoundCloud" && soundcloudLinks.length >= 3) {
      alert("Only 3 Soundcloud links allowed")
    }
    
    else if (linkType === "BandCamp" && bandcampLinks.length < 3) {
      setbandcampLinks([...bandcampLinks, linkState]);
    } else if (linkType === "BandCamp" && bandcampLinks.length >= 3) {
      alert("Only 3 Bandcamp links allowed")
    }
    
    else if (linkType === "Imgur" && imgurLinks.length < 5) {
      setImgurLinks([...imgurLinks, linkState]);
    } else if (linkType === "Imgur" && imgurLinks.length >= 5) {
      alert("Only 5 image links allowed")
    }

    setLinkState("");
    setMediaState("-");
  };

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
  }, []);

  // Venue Sign Up Page
  if (type === "Venue") {
    signUpForm = (
        <div id="card-contain">
        <div class="card shadow-lg p-3 mb-5 shadow bg-white rounded">
            <h5 id="card-head" class="card-header shadow text-center">Venue Sign Up</h5>
           <div class="card-body">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
            <span className="input-group-text shadow" id="basic-addon1">
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
          <h1 class="text-center">Is your venue...</h1>
          <div>
            <h4>A minimum age to enter:</h4>
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
            <h2>Ammenities!</h2>
            <div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkfood" />
                <label class="form-check-label" for="checkfood" >
                  Food
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkbar" />
                <label class="form-check-label" for="checkbar" >
                  Bar
                </label>
              </div>
            </div>
          </div>
          <h2>Add some links to your venue's other content pages!</h2>
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
                      id="venue_website_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="website url"
                      aria-label="website_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="venue_bandcamp_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="bandcamp url"
                      aria-label="bandcamp_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="venue_soundcloud_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="soundcloud url"
                      aria-label="soundcloud_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="venue_spotify_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="spotify url"
                      aria-label="spotify_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Add a contact person's details to reach out to!</h2>
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Contact Title</th>
                <th scope="col">Contact Name</th>
                <th scope="col">Contact Phone</th>
                <th scope="col">Contact Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="venue_contact_title"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Title"
                      aria-label="venue_contact_title"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="venue_contact_name"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Name"
                      aria-label="venue_contact_name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="venue_contact_number"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Phone"
                      aria-label="venue_contact_number"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="venue_contact_email"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Email"
                      aria-label="venue_contact_email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Tell us a bit about your venue's specs!</h2>
          <div>
            <div className="input-group mb-3">
                <span className="input-group-text shadow" id="basic-addon1">
                  Total Capacity:
                </span>
                <input
                  type="number"
                  id="venue_capacity"
                  className="form-control input_values venue_input_values"
                  placeholder="0"
                  aria-label="Capacity"
                  aria-describedby="basic-addon1"
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text shadow" id="basic-addon1">
                Specs:
                </span>
                <textarea
                  type="text"
                  id="venue_specs_description"
                  className="form-control input_values venue_input_values"
                  placeholder="Feel free to use this field as a spot to really describe to artists what to expect (eg. technical equipment, crew, etc)"
                  aria-label="Specs"
                  aria-describedby="basic-addon1"
                />
            </div>
          </div>
          <h2>Finally, let's add some pics of your venue</h2>
          {imgurLinks.map((img) => (
            <p>Imgur link added!{img}<button onClick={() => removeImgurLink({img})} type="button" class="btn-close" aria-label="Close"/></p>
            //onClick={(e) => removeImgurLink(e.target.innerText)}
          ))}
          <div>
            <form>
              <span className="input-group-text input-group shadow rounded" id="basic-addon1">
                Add Image:
              </span>
              <input
                type="text"
                id="imgur_url"
                className="form-control input_values artist_input_values table_values"
                placeholder={`Enter embedded Imgur link here...`}
                aria-label="imgur_url"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setLinkState(e.target.value); 
                  setMediaState('Imgur');
                }}
              />
              <button
                onClickCapture={(e) => handleMediaAdd(mediaState)}
                type="button"
                id="media-button"
                className="btn btn-primary btn-lg mb-3"
              >
                Add Media
              </button>
            </form>
          </div>
          <div id="sub-but-div">
          <button id="sub-but" type="submit" className="btn btn-primary btn-lg shadow-lg p-3 mb-5 bg-white rounded">
            Submit!
          </button>
          </div>
        </form>
      </div>
      </div>
    </div>
    </div>
    );
  }

  // Artist Sign Up Page
  else if (type === "Artist") {
    signUpForm = (
        <div id="card-contain">
        <div class="card shadow-lg p-3 mb-5 shadow bg-white rounded">
        <h5 id="card-head" class="card-header shadow text-center">Artist Sign Up</h5>
        <div class="card-body">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            id="modal-but"
            className="btn btn-primary shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#picModal"
          >
            Help me add a profile pic!
          </button>
          <div className="input-group mb-3">
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            id="modal-but"
            className="btn btn-primary shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#embedModal"
          >
            Help me embed!
          </button>
          <div className="input-group mb-3">
            <span className="input-group-text shadow rounded" id="basic-addon1">
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
            <p>Youtube Link Added! <button onClick={() => removeYoutubeLink({youtube})} type="button" class="btn-close" aria-label="Close"/></p>
          ))}
          {soundcloudLinks.map((sc) => (
            <p>SoundCloud Link Added! <button onClick={() => removeSoundcloudLink({sc})} type="button" class="btn-close" aria-label="Close"/></p>
          ))}
          {bandcampLinks.map((bc) => (
            <p>BandCamp Link Added! <button onClick={() => removeBandcampLink({bc})} type="button" class="btn-close" aria-label="Close"/></p>
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
                  id="media-button"
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
                      id="artist_website_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="website url"
                      aria-label="website_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="artist_bandcamp_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="bandcamp url"
                      aria-label="bandcamp_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="artist_soundcloud_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="soundcloud url"
                      aria-label="soundcloud_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="artist_spotify_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="spotify url"
                      aria-label="spotify_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="sub-but-div">
          <button id="sub-but" type="submit" className="btn btn-primary btn-lg shadow-lg p-3 mb-5 bg-white rounded">
            Submit!
          </button>
          </div>
        </form>
      </div>
      </div>
        </div>
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
        <div className="d-flex justify-content-center ">
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
