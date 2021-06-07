import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';


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

        if (type === 'Venue') {
            signUpForm = 
            <form>
                <div className = 'form-group' id = 'venueSignup'>
                    <label htmlFor = 'venueName'>Venue Name:</label>
                    <input type = 'text' className = 'form-control' required></input>

                    <label htmlFor = 'venueCity'>City:</label>
                    <input type = 'text' className = 'form-control' required></input>

                    <label htmlFor = 'venueState'>State:</label>
                    <select className = 'form-select'>
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
            </form>
        }

        else if (type === 'Artist') {
            signUpForm =
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
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Artist Name:</span>
                    <input type="text" id="artist_name" className="form-control input_values artist_input_values" placeholder="Your band / artist name here!" aria-label="Artist" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Bio:</span>
                    <textarea type="text" id="artist_bio" className="form-control input_values artist_input_values" placeholder="Tell us about yourself!" aria-label="Bio" aria-describedby="basic-addon1" />
                </div>
                <h1>Now that the required stuffs out of the way, why not add some of your media?</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Youtube</th>
                        <th scope="col">Bandcamp</th>
                        <th scope="col">Soundcloud</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            </form>
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