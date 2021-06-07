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
            signUpForm = <p>Artist Selected</p>
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