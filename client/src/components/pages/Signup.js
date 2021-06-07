import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';
import axios from 'axios';


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signupType: ''
        };

        this.setArtist = this.setArtist.bind(this)
        this.setVenue = this.setVenue.bind(this)
    }

    setArtist = () => {
        this.setState({
            signupType: 'Artist'
        })
        // console.log(this.state.signupType);
    }

    setVenue = () => {
        this.setState({
            signupType: 'Venue'
        })
        // console.log(this.state.signupType);
    }

    render() {

        let type = this.state.signupType;
        let signUpForm;










        // Venue Sign Up Page
        if (type === 'Venue') {
            signUpForm = 
            <div>
                <div className="modal fade" id="embedModal" tabindex="-1" aria-labelledby="embedModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">How to embed a link!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="picModal" tabindex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">How to add a profile pic!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Username:</span>
                        <input type="text" id="venue_username" className="form-control input_values venue_input_values" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email:</span>
                        <input type="email" id="venue_email" className="form-control input_values venue_input_values" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Password:</span>
                        <input type="password" id="venue_password" className="form-control input_values venue_input_values" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Confirm Password:</span>
                        <input type="Password" id="venue_password_confirm" className="form-control input_values venue_input_values" placeholder="Confirm Password" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Address:</span>
                        <input type="text" id="venue_address" className="form-control input_values venue_input_values" placeholder="Venue's address" aria-label="Address" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">City:</span>
                        <input type="text" id="venue_city" className="form-control input_values venue_input_values" placeholder="City Name" aria-label="City" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <span className="input-group-text" id="basic-addon1">State:</span>
                        <select className = 'form-select input_values venue_input_values' id="venue_state">
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
                    <br/>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Artist Name:</span>
                        <input type="text" id="venue_name" className="form-control input_values venue_input_values" placeholder="Your venue's name here!" aria-label="Venue" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Bio:</span>
                        <textarea type="text" id="artist_bio" className="form-control input_values artist_input_values" placeholder="Tell us about yourself!" aria-label="Bio" aria-describedby="basic-addon1" />
                    </div>
                    <h1>Now that the required stuffs out of the way, why not add some of your media?</h1>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Profile Pic:</span>
                        <input type="text" id="imgur_url" className="form-control input_values artist_input_values" placeholder="Upload a photo! Imgur links only please." aria-label="imgur_url" aria-describedby="basic-addon1" />
                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#picModal">
                    Help me add a profile pic!
                    </button>
                    <table className="table text-center">
                        <thead>
                            <tr>
                            <th scope="col">Youtube</th>
                            <th scope="col">Bandcamp</th>
                            <th scope="col">Soundcloud</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Youtube 1:</span>
                                    <input type="text" id="youtube_one" className="form-control input_values artist_input_values table_values" placeholder="Youtube Embed links only please." aria-label="youtube_one" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Bandcamp 1:</span>
                                <input type="text" id="bandcamp_one" className="form-control input_values artist_input_values table_values" placeholder="Bandcamp Embed links only please." aria-label="bandcamp_one" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Soundcloud 1:</span>
                                <input type="text" id="soundcloud_one" className="form-control input_values artist_input_values table_values" placeholder="Soundcloud Embed links only please." aria-label="soundcloud_one" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                            <tr>
                            <td><div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Youtube 2:</span>
                                    <input type="text" id="youtube_two" className="form-control input_values artist_input_values table_values" placeholder="Youtube Embed links only please." aria-label="youtube_two" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Bandcamp 2:</span>
                                <input type="text" id="bandcamp_two" className="form-control input_values artist_input_values table_values" placeholder="Bandcamp Embed links only please." aria-label="bandcamp_two" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Soundcloud 2:</span>
                                <input type="text" id="soundcloud_two" className="form-control input_values artist_input_values table_values" placeholder="Soundcloud Embed links only please." aria-label="soundcloud_two" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                            <tr>
                            <td><div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Youtube 3:</span>
                                    <input type="text" id="youtube_three" className="form-control input_values artist_input_values table_values" placeholder="Youtube Embed links only please." aria-label="youtube_three" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Bandcamp 3:</span>
                                <input type="text" id="bandcamp_three" className="form-control input_values artist_input_values table_values" placeholder="Bandcamp Embed links only please." aria-label="bandcamp_three" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Soundcloud 3:</span>
                                <input type="text" id="soundcloud_three" className="form-control input_values artist_input_values table_values" placeholder="Soundcloud Embed links only please." aria-label="soundcloud_three" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#embedModal">
                    Help me embed!
                    </button>
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
                            <td><div className="input-group mb-3">
                                    <input type="text" id="website_url" className="form-control input_values artist_input_values table_values" placeholder="Your website URL here!" aria-label="website_url" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                    <input type="text" id="bandcamp_url" className="form-control input_values artist_input_values table_values" placeholder="Your bandcamp URL here!" aria-label="bandcamp_url" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                    <input type="text" id="soundcloud_url" className="form-control input_values artist_input_values table_values" placeholder="Your soundcloud URL here!" aria-label="soundcloud_url" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                    <input type="text" id="spotify_url" className="form-control input_values artist_input_values table_values" placeholder="Your spotify URL here!" aria-label="spotify_url" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary btn-lg">Submit!</button>
                </form>
            </div>
        }









        // Artist Sign Up Page
        else if (type === 'Artist') {
            signUpForm =
            <div>
                <div className="modal fade" id="embedModal" tabindex="-1" aria-labelledby="embedModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">How to embed a link!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="picModal" tabindex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">How to add a profile pic!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Username:</span>
                        <input type="text" id="artist_username" className="form-control input_values artist_input_values" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email:</span>
                        <input type="email" id="artist_email" className="form-control input_values artist_input_values" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Password:</span>
                        <input type="password" id="artist_password" className="form-control input_values artist_input_values" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Confirm Password:</span>
                        <input type="Password" id="artist_password_confirm" className="form-control input_values artist_input_values" placeholder="Confirm Password" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">City:</span>
                        <input type="text" id="artist_city" className="form-control input_values artist_input_values" placeholder="City Name" aria-label="City" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <span className="input-group-text" id="basic-addon1">State:</span>
                        <select className = 'form-select input_values artist_input_values' id="artist_state">
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
                    <br/>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Artist Name:</span>
                        <input type="text" id="artist_name" className="form-control input_values artist_input_values" placeholder="Your band / artist name here!" aria-label="Artist" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Bio:</span>
                        <textarea type="text" id="artist_bio" className="form-control input_values artist_input_values" placeholder="Tell us about yourself!" aria-label="Bio" aria-describedby="basic-addon1" />
                    </div>
                    <h1>Now that the required stuffs out of the way, why not add some of your media?</h1>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Profile Pic:</span>
                        <input type="text" id="imgur_url" className="form-control input_values artist_input_values" placeholder="Upload a photo! Imgur links only please." aria-label="imgur_url" aria-describedby="basic-addon1" />
                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#picModal">
                    Help me add a profile pic!
                    </button>
                    <table className="table text-center">
                        <thead>
                            <tr>
                            <th scope="col">Youtube</th>
                            <th scope="col">Bandcamp</th>
                            <th scope="col">Soundcloud</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Youtube 1:</span>
                                    <input type="text" id="youtube_one" className="form-control input_values artist_input_values table_values" placeholder="Youtube Embed links only please." aria-label="youtube_one" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Bandcamp 1:</span>
                                <input type="text" id="bandcamp_one" className="form-control input_values artist_input_values table_values" placeholder="Bandcamp Embed links only please." aria-label="bandcamp_one" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Soundcloud 1:</span>
                                <input type="text" id="soundcloud_one" className="form-control input_values artist_input_values table_values" placeholder="Soundcloud Embed links only please." aria-label="soundcloud_one" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                            <tr>
                            <td><div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Youtube 2:</span>
                                    <input type="text" id="youtube_two" className="form-control input_values artist_input_values table_values" placeholder="Youtube Embed links only please." aria-label="youtube_two" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Bandcamp 2:</span>
                                <input type="text" id="bandcamp_two" className="form-control input_values artist_input_values table_values" placeholder="Bandcamp Embed links only please." aria-label="bandcamp_two" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Soundcloud 2:</span>
                                <input type="text" id="soundcloud_two" className="form-control input_values artist_input_values table_values" placeholder="Soundcloud Embed links only please." aria-label="soundcloud_two" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                            <tr>
                            <td><div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Youtube 3:</span>
                                    <input type="text" id="youtube_three" className="form-control input_values artist_input_values table_values" placeholder="Youtube Embed links only please." aria-label="youtube_three" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Bandcamp 3:</span>
                                <input type="text" id="bandcamp_three" className="form-control input_values artist_input_values table_values" placeholder="Bandcamp Embed links only please." aria-label="bandcamp_three" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Soundcloud 3:</span>
                                <input type="text" id="soundcloud_three" className="form-control input_values artist_input_values table_values" placeholder="Soundcloud Embed links only please." aria-label="soundcloud_three" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#embedModal">
                    Help me embed!
                    </button>
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
                            <td><div className="input-group mb-3">
                                    <input type="text" id="website_url" className="form-control input_values artist_input_values table_values" placeholder="Your website URL here!" aria-label="website_url" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                    <input type="text" id="bandcamp_url" className="form-control input_values artist_input_values table_values" placeholder="Your bandcamp URL here!" aria-label="bandcamp_url" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                    <input type="text" id="soundcloud_url" className="form-control input_values artist_input_values table_values" placeholder="Your soundcloud URL here!" aria-label="soundcloud_url" aria-describedby="basic-addon1" />
                            </div></td>
                            <td><div className="input-group mb-3">
                                    <input type="text" id="spotify_url" className="form-control input_values artist_input_values table_values" placeholder="Your spotify URL here!" aria-label="spotify_url" aria-describedby="basic-addon1" />
                            </div></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary btn-lg">Submit!</button>
                </form>
            </div>
        }

        return (
            <div className = 'home-background'>

                <div className = 'container'>

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

                    <button onClick = {this.setArtist}>
                        Artist
                    </button>
                    <button onClick = {this.setVenue}>
                        Venue
                    </button>

                    {signUpForm}
                    {/* <div className = 'calendar-placeholder'>
                        <h4>Week's Worth of Shows</h4>
                    </div> */}
                </div>
            </div>
        )
    }
}


export default Signup;