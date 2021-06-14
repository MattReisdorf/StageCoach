import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import "../css/Signup.css";
import axios from "axios";
import Cookies from 'universal-cookie';
import signupApi from '../../utils/signupStuff';
import { set } from "mongoose";



function Signup() {
  const [mediaState, setMediaState] = React.useState("-");

  const [linkState, setLinkState] = React.useState("");

  const [youtubeLinks, setYoutubeLinks] = React.useState([]);

  const [soundcloudLinks, setsoundcloudLinks] = React.useState([]);

  const [bandcampLinks, setbandcampLinks] = React.useState([]);

  const [imgurLinks, setImgurLinks] = React.useState([]);

  const [venueState, setVenueState] = React.useState(null);

  const [artistState, setArtistState] = React.useState(null);

  const [signupType, setSignupType] = React.useState("");

  let type = signupType;
  let signUpForm;

  const cookies = new Cookies();

  const [venueData, setVenueData] = React.useState({
    username: '',
    email: '',
    password: '',
    passconfirm: '',
    address: '',
    city: '',
    state: '',
    venue_name: '',
    // Not Required
    bio: null,
    all_ages: false,
    eighteen_plus: false,
    twentyone_plus: false,
    has_food: false,
    has_bar: false,
    external_website: null,
    external_social_facebook: null,
    external_social_instagram: null,
    external_social_twitter: null,
    contact_title: null,
    contact_name: null,
    contact_number: null,
    contact_email: null,
    specs_capacity: null,
    specs_description: null,
    image_one: null,
    image_two: null,
    image_three: null,
    image_four: null,
    image_five: null,
  });

  const [artistData, setArtistData] = React.useState({
    username: '',
    email: '',
    password: '',
    passconfirm: '',
    city: '',
    state: '',
    artist_name: '',
    // Not Required
    bio: null,
    genre_one: null,
    genre_two: null,
    genre_three: null,
    youtube_one: null,
    youtube_two: null,
    youtube_three: null,
    bandcamp_one: null,
    bandcamp_two: null,
    bandcamp_three: null,
    soundcloud_one: null,
    soundcloud_two: null,
    soundcloud_three: null,
    imgur_url: null,
    external_artist_website: null,
    external_bandcamp: null,
    external_soundcloud: null,
    external_spotify: null
  })

  const foodToggle = async() => {
    if (venueData.has_food === false) {
      return setVenueData({...venueData, has_food: true});
    } else if (venueData.has_food === true) {
      return setVenueData({...venueData, has_food: false});
    }
  }

  const barToggle = async() => {
    if (venueData.has_bar === false) {
      return setVenueData({...venueData, has_bar: true});
    } else if (venueData.has_bar === true) {
      return setVenueData({...venueData, has_bar: false});
    }
  }

  const allagesToggle = async() => {
    if (venueData.all_ages === false) {
      return setVenueData({...venueData, all_ages: true});
    } else if (venueData.all_ages === true) {
      return setVenueData({...venueData, all_ages: false});
    }
  }

  const eighteenToggle = async() => {
    if (venueData.eighteen_plus === false) {
      return setVenueData({...venueData, eighteen_plus: true});
    } else if (venueData.eighteen_plus === true) {
      return setVenueData({...venueData, eighteen_plus: false});
    }
  }

  const twentyOneToggle = async() => {
    if (venueData.twentyone_plus === false) {
      return setVenueData({...venueData, twentyone_plus: true});
    } else if (venueData.twentyone_plus === true) {
      return setVenueData({...venueData, twentyone_plus: false});
    }
  }



  const venueSubmit = () => {

    if (venueData.username){
      let usernameSplit = venueData.username.split('');
      console.log(usernameSplit)
      if (usernameSplit.includes('!',"@",'#','$','%','^','&','*','(',')','+','-','=','`','~','/')){
        console.log("USERNAME VERIFICATION FAIL HIT",usernameSplit)
        return alert('Username can only contain letters and numbers.')
      } 
    } 

    if (venueData.password.length > 32 || venueData.password.length < 8) {
      return alert('Password must be between 8 and 32 characters')
    }
    
    if (venueData.password !== venueData.passconfirm) {
      return alert('Passwords do not match')
    }
    
    if(venueData.email){
      let emailSplit = venueData.email.split('');
      console.log(emailSplit)
      if (!emailSplit.includes('@')) {
        console.log('EMAIL VERIFICATION FAIL HIT')
        return alert('Entered email must be a valid email address.')
      }
    } 

    if (venueData.bio){
      if (venueData.bio.length > 1000) {
        return alert(`Your bio can't be longer than 1000 characters`)
      }
    }

    if (venueData.venue_name) {
      if (venueData.venue_name.length > 100) {
        return alert('Your venue name is seriously over 100 characters? come on.')
      }
    }

    if (venueData.city){
      let citySplit = venueData.city.split('');
      console.log(citySplit)
      if (citySplit.includes('!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/')) {
        console.log('CITY VERIFICATION FAIL HIT', citySplit)
        return alert('The following characters are not allowed for City Name: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, `, ~, /')
      }
    }

    if (venueData.contact_title){
      let titleSplit = venueData.contact_title.split('');
      console.log(titleSplit)
      if (titleSplit.includes('!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/')){
        console.log('CONTACT TITLE VERIFICATION FAILED', titleSplit)
        return alert('The following characters are not allowed for a title name: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, `, ~, /')
      }
    }

    if (venueData.contact_name) {
      let nameSplit = venueData.contact_name.split('');
      console.log(nameSplit)
      if (nameSplit.includes('!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0')){
        console.log('CONTACT NAME VERIFICATION FAIL HIT', nameSplit)
        return alert('Contact name cannot contain numbers or symbols')
      }
    }

    if (venueData.contact_email){
      let contactEmailSplit = venueData.contact_email.split('');
      console.log(contactEmailSplit)
      if (!contactEmailSplit.includes('@')) {
        console.log('CONTACT EMAIL VERIFICATION FAIL HIT', contactEmailSplit)
        return alert('Only valid contact emails please')
      }
    }

    if (venueData.contact_number){
      if (isNaN(venueData.contact_number)) {
        console.log('CONTACT NUMBER VALIDATION FAIL HIT')
        return alert('Only valid phone numbers allowed')
      }
    }

    if (venueData.specs_capacity) {
      if (isNaN(venueData.specs_capacity)){
        console.log('SPECS CAPACITY VALIDATION FAIL HIT')
        return alert('Only numbers allowed')
      }
    }

    if (venueData.specs_description) {
      if (venueData.specs_description.length > 1000) {
        console.log('SPECS DESCRIPTION VALIDATION FAIL HIT')
        return alert('Venue description must be 1000 characters or less')
      }
    }

    // Api Post if data verification checks clear
    signupApi.signupVenue(venueData).then((success) => {
      alert('Venue account created!')
      console.log(success.data)
      cookies.set('id', success.data.id, { path: '/' })
      return window.location.assign('/')
    }).catch((err) => {
      console.log('Running here!')
      if(err){
        console.log(err)
        alert('Account creation failed, please try again')
        return window.location.assign('/signup');
      }
    })
  }

  const artistSubmit = () => {

    if (artistData.username){
      let usernameSplit = artistData.username.split('');
      console.log(usernameSplit)
      if (usernameSplit.includes('!',"@",'#','$','%','^','&','*','(',')','+','-','=','`','~','/')){
        console.log("USERNAME VERIFICATION FAIL HIT",usernameSplit)
        return alert('Username can only contain letters and numbers.')
      } 
    } 

    if (artistData.password.length > 32 || artistData.password.length < 8) {
      return alert('Password must be between 8 and 32 characters')
    }

    if (artistData.password !== artistData.passconfirm) {
      return alert('Passwords do not match')
    }

    if(artistData.email){
      let emailSplit = artistData.email.split('');
      console.log(emailSplit)
      if (!emailSplit.includes('@')) {
        console.log('EMAIL VERIFICATION FAIL HIT')
        return alert('Entered email must be a valid email address.')
      }
    }

    if (artistData.bio){
      if (artistData.bio.length > 1000) {
        return alert(`Your bio can't be longer than 1000 characters`)
      }
    }

    if (artistData.artist_name) {
      if (artistData.artist_name.length > 100) {
        return alert('Your band name is seriously over 100 characters? come on.')
      }
    }

    if (artistData.city){
      let citySplit = artistData.city.split('');
      console.log(citySplit)
      if (citySplit.includes('!','@','#','$','%','^','&','*','(',')','+','-','=','`','~','/')) {
        console.log('CITY VERIFICATION FAIL HIT', citySplit)
        return alert('The following characters are not allowed for City Name: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, `, ~, /')
      }
    }

    setTimeout(function(){ 
      console.log(artistData.youtube_one)
      console.log('ARTIST ELSE HIT')
      signupApi.signupArtist(artistData).then((success) => {
        alert('Artist account created!')
        console.log(success.data)
        cookies.set('id', success.data.id, { path: '/'})
        return window.location.assign('/')
      }).catch((err) => {
        if (err) {
          console.log(err)
          alert('Account creation failed, please try again')
          return window.location.assign('/signup')
        }
      });
    }, 3000);

    
  }

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


  const handleMediaAdd = async (linkType) => {
    console.log("Link state!!", linkState);


    if (linkType === "YouTube" && artistData.youtube_one === null) {
      setArtistData({...artistData, youtube_one: linkState});
    } else if (linkType === "YouTube" && artistData.youtube_two === null) {
      setArtistData({...artistData, youtube_two: linkState});
    } else if (linkType === "YouTube" && artistData.youtube_three === null) {
      setArtistData({...artistData, youtube_three: linkState});
    } else if (linkType === "YouTube" && !artistData.youtube_one === null && !artistData.youtube_two === null && !artistData.youtube_three === null) {
      alert("Only 3 YouTube links allowed")
    }

    if (linkType === "SoundCloud" && artistData.soundcloud_one === null) {
      setArtistData({...artistData, soundcloud_one: linkState});
    } else if (linkType === "SoundCloud" && artistData.soundcloud_two === null) {
      setArtistData({...artistData, soundcloud_two: linkState});
    } else if (linkType === "SoundCloud" && artistData.soundcloud_three === null) {
      setArtistData({...artistData, soundcloud_three: linkState});
    } else if (linkType === "SoundCloud" && !artistData.soundcloud_one === null && !artistData.soundcloud_two === null && !artistData.soundcloud_three === null) {
      alert("Only 3 Soundcloud links allowed")
    }

    if (linkType === "BandCamp" && artistData.bandcamp_one === null) {
      setArtistData({...artistData, bandcamp_one: linkState});
    } else if (linkType === "BandCamp" && artistData.bandcamp_two === null) {
      setArtistData({...artistData, bandcamp_two: linkState});
    } else if (linkType === "BandCamp" && artistData.bandcamp_three === null) {
      setArtistData({...artistData, bandcamp_three: linkState});
    } else if (linkType === "BandCamp" && !artistData.bandcamp_one === null && !artistData.bandcamp_two === null && !artistData.bandcamp_three === null) {
      alert("Only 3 Bandcamp links allowed")
    }

    if (linkType === "Imgur" && venueData.image_one === null) {
      setVenueData({...venueData, image_one: linkState});
    } else if (linkType === "Imgur" && venueData.image_two === null) {
      setVenueData({...venueData, image_two: linkState});
    } else if (linkType === "Imgur" && venueData.image_three === null) {
      setVenueData({...venueData, image_three: linkState});
    } else if (linkType === "Imgur" && venueData.image_four === null) {
      setVenueData({...venueData, image_four: linkState});
    } else if (linkType === "Imgur" && venueData.image_five === null) {
      setVenueData({...venueData, image_five: linkState});
    } else if (linkType === "Imgur" && !venueData.image_one === null && !venueData.image_two === null && !venueData.image_three === null && !venueData.image_four === null && !venueData.image_five === null) {
      alert("Only 5 image links allowed")
    }

    if (linkType === "YouTube" && youtubeLinks.length < 3) {
      setYoutubeLinks([...youtubeLinks, linkState]);
    }
    
    if (linkType === "SoundCloud" && soundcloudLinks.length < 3) {
      setsoundcloudLinks([...soundcloudLinks, linkState]);
    } 
    
    if (linkType === "BandCamp" && bandcampLinks.length < 3) {
      setbandcampLinks([...bandcampLinks, linkState]);
    } 
    
    if (linkType === "Imgur" && imgurLinks.length < 5) {
      setImgurLinks([...imgurLinks, linkState]);
    } 

    setLinkState("");
    setMediaState("-");
  };


  const handleOnclick = (e)=>{
    console.log(e.target.textContent);
    setSignupType(e.target.textContent);
    if (e.target.textContent === 'Artist'){
      setArtistState('pressed');
      setVenueState(null)
    }else if (e.target.textContent === 'Venue'){
      setArtistState(null);
      setVenueState('pressed');
    }
  }



  // Venue Sign Up Page
  if (type === "Venue") {
    signUpForm = (
        <div id="card-contain">
        <div className="card shadow-lg p-3 mb-5 shadow bg-white rounded main-card-div">
            <h5 id="card-head" className="card-header shadow text-center">Venue Sign Up</h5>
           <div className="card-body">
      <div>
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
              <div id="modal-body" class="modal-body">go to <a href="http://www.imgur.com">Imgur</a> and click "new post" on the top left of the page <br></br><br></br> <img id="modalimg" src="./images/newpost.png"/> 
              <br></br><br></br>then drag and drop or choose the picture you want to use from your files. <br></br><br></br> <img id="modalimg" src="./images/addimage.png"/> <br></br><br></br> 
              Once the image is uploaded, simply click the "..." button on the top right of the image <br></br> <br></br> <img id="modalimg" src="./images/copylink.png"/> <br></br> <br></br> and 
              click "get share links." once the links are displayed click "copy link" on the "HTML Embed" option. <br></br> <br></br> <img id="modalimg" src="./images/embed.png"/> <br></br>
              <br></br> Then paste the link in the input below!</div>
              <div class="modal-footer">
                <button
                  id="modal-but-close"
                  type="button"
                  className="btn btn-secondary shadow-lg"
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
              onChange={(event) => setVenueData({...venueData, username: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, email: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, password: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, passconfirm: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, address: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, city: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, state: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, venue_name: event.target.value})}
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
              onChange={(event) => setVenueData({...venueData, bio: event.target.value})}
              type="text"
              id="venue_bio"
              className="form-control input_values venue_input_values"
              placeholder="Tell us about yourself!"
              aria-label="Bio"
              aria-describedby="basic-addon1"
            />
          </div>
          <h1 id="question" className="text-center">Does your venue have...</h1>
          <div>
            <h4>A minimum age to enter:</h4>
            <div className="form-check">
                <input
                  onChange={() => allagesToggle()}
                  className="form-check-input"
                  type="checkbox"
                  id="checkallages" />
                {/* <input
                onChange={() => setVenueData({...venueData, all_ages: true}, {...venueData, eighteen_plus: false}, {...venueData, twentyone_plus: false})}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault"
                checked
              /> */}
              <label className="form-check-label" for="flexRadioDefault">
                All Ages
              </label>
            </div>
            <div className="form-check">
                <input
                  onChange={() => eighteenToggle()}
                  className="form-check-input"
                  type="checkbox"
                  id="checkeighteen" />
                {/* <input
                onChange={() => setVenueData({...venueData, eighteen_plus: true}, {...venueData, all_ages: false})}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="eighteen_plus"
              /> */}
              <label className="form-check-label" for="flexRadio">
                18+
              </label>
            </div>
            <div className="form-check">
                <input
                  onChange={() => twentyOneToggle()}
                  className="form-check-input"
                  type="checkbox"
                  id="checktwentyone" />
                {/* <input
                onChange={() => setVenueData({...venueData, twentyone_plus: true}, {...venueData, all_ages: false})}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="twentyone_plus"
              /> */}
              <label className="form-check-label" for="flexRadio">
                21+
              </label>
            </div>
            <h4>Ammenities:</h4>
            <div>
              <div className="form-check">
                <input
                  onChange={() => foodToggle()}
                  className="form-check-input"
                  type="checkbox"
                  id="checkfood" />
                <label className="form-check-label" for="checkfood" >
                  Food
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={() => barToggle()}
                  className="form-check-input"
                  type="checkbox"
                  id="checkbar" />
                <label className="form-check-label" for="checkbar" >
                  Bar
                </label>
              </div>
            </div>
          </div>
          <h2>Add some links to your venue's other content pages!</h2>
          <table id="sign-table" className="table text-center col-md-12">
            <thead id="sign-thead">
              <tr id="sign-tr">
                <th id="sign-th" scope="col">Website</th>
                <th id="sign-th" scope="col">Bandcamp</th>
                <th id="sign-th" scope="col">Soundcloud</th>
                <th id="sign-th" scope="col">Spotify</th>
              </tr>
            </thead>
            <tbody id="sign-tbody">
              <tr id="sign-tr">
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, external_website: event.target.value})}
                      type="text"
                      id="venue_website_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="website url"
                      aria-label="website_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, external_social_facebook: event.target.value})}
                      type="text"
                      id="venue_facebook_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Facebook url"
                      aria-label="facebook_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, external_social_instagram: event.target.value})}
                      type="text"
                      id="venue_instagram_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Instagram url"
                      aria-label="instagram_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, external_social_twitter: event.target.value})}
                      type="text"
                      id="venue_twitter_url"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Twitter url"
                      aria-label="twitter_url"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Add a contact person's details to reach out to!</h2>
          <table id="sign-table" className="table text-center">
            <thead id="sign-thead">
              <tr id="sign-tr">
                <th id="sign-th" scope="col">Contact Title</th>
                <th id="sign-th" scope="col">Contact Name</th>
                <th id="sign-th" scope="col">Contact Phone</th>
                <th id="sign-th" scope="col">Contact Email</th>
              </tr>
            </thead>
            <tbody id="sign-tbody">
              <tr id="sign-tr">
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, contact_title: event.target.value})}
                      type="text"
                      id="venue_contact_title"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Title"
                      aria-label="venue_contact_title"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, contact_name: event.target.value})}
                      type="text"
                      id="venue_contact_name"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Name"
                      aria-label="venue_contact_name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, contact_number: event.target.value})}
                      type="text"
                      id="venue_contact_number"
                      className="form-control input_values artist_input_values table_values"
                      placeholder="Phone"
                      aria-label="venue_contact_number"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td id="sign-td">
                  <div className="input-group mb-3">
                    <input
                      onChange={(event) => setVenueData({...venueData, contact_email: event.target.value})}
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
                  onChange={(event) => setVenueData({...venueData, specs_capacity: event.target.value})}
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
                  onChange={(event) => setVenueData({...venueData, specs_description: event.target.value})}
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
            <p>Image link added! {img}</p>
          ))}
          <div>
          <button
            type="button"
            id="modal-but"
            className="btn btn-primary shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#picModal"
          >
            Help me add a profile pic!
          </button>
            <form>
              <div className="input-group mb-3">
              <span className="input-group-text input-group shadow rounded" id="basic-addon1">
                Add Images:
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
              </div>
              <button
                onClickCapture={(e) => handleMediaAdd(mediaState)}
                type="button"
                id="media-button"
                className="btn btn-primary btn-lg mb-3 shadow rounded"
              >
                Add Picture
              </button>
            </form>
          </div>
          <div id="sub-but-div">
          <button onClick={() => venueSubmit()} id="sub-but" type="button" className="btn btn-primary btn-lg shadow-lg p-3 mb-5 bg-white rounded">
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
        <div className="card shadow-lg p-3 mb-5 shadow bg-white rounded main-card-div">
        <h5 id="card-head" className="card-header shadow text-center">Artist Sign Up</h5>
        <div className="card-body">
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
              <div class="modal-body" id="modal-body"><h1 id="mediah1">For YouTube:</h1> <hr></hr>go to your video and click "share" at the bottom right under the video. <br></br> <br></br> 
              <img id="modalimg" src="./images/ytshare.png"/> <br></br> <br></br> then click the "embed" option and copy the URL provided and paste into the input below! 
              <br></br> <br></br> <img id="modalimg" src="./images/ytembed.png"/> <br></br> <br></br> <h1 id="mediah1">For SoundCloud:</h1><hr></hr> go to your song and click "share" below the song 
              <br></br> <br></br> <img id="modalimg" src="./images/scshare.png"/> <br></br> <br></br> then click the "embed" tab on the top of the pop up copy the link 
              provided and paste into the input below! <br></br> <br></br> <img id="modalimg" src="./images/scembed.png"/> <br></br> <br></br> <h1 id="mediah1">For BandCamp:</h1>
              <hr></hr>go to your profile and click on the song you want to share, once on the specific song's page, click the "share/embed" under the picture
              of the album <br></br> <br></br> <img id="modalimg" src="./images/bcshare.png"/> <br></br> <br></br> then click "embed this track" <br></br> <br></br>
              <img id="modalimg" src="./images/bcembed.png"/> <br></br> <br></br> choose your size and copy the embedded link to copy and paste in the input below!
              <br></br> <br></br> <img id="modalimg" src="./images/bcembed2.png"/>  </div>
              <div class="modal-footer">
                <button
                  id="modal-but-close"
                  type="button"
                  className="btn btn-secondary shadow-lg"
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
              <div id="modal-body" class="modal-body">go to <a href="http://www.imgur.com">Imgur</a> and click "new post" on the top left of the page <br></br><br></br> <img id="modalimg" src="./images/newpost.png"/> 
              <br></br><br></br>then drag and drop or choose the picture you want to use from your files. <br></br><br></br> <img id="modalimg" src="./images/addimage.png"/> <br></br><br></br> 
              Once the image is uploaded, simply click the "..." button on the top right of the image <br></br> <br></br> <img id="modalimg" src="./images/copylink.png"/> <br></br> <br></br> and 
              click "get share links." once the links are displayed click "copy link" on the "HTML Embed" option. <br></br> <br></br> <img id="modalimg" src="./images/embed.png"/> <br></br>
              <br></br> Then paste the link in the input below!</div>
              <div class="modal-footer">
                <button
                  id="modal-but-close"
                  type="button"
                  className="btn btn-secondary shadow-lg"
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
              onChange={(event) => setArtistData({...artistData, username: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, email: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, password: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, passconfirm: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, city: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, state: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, artist_name: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, bio: event.target.value})}
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
              onChange={(event) => setArtistData({...artistData, imgur_url: event.target.value})}
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
            <p>Youtube Link Added!</p>
          ))}
          {soundcloudLinks.map((sc) => (
            <p>SoundCloud Link Added!</p>
          ))}
          {bandcampLinks.map((bc) => (
            <p>BandCamp Link Added!</p>
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
                  className="btn btn-primary shadow btn-lg"
                >
                  Add Media
                </button>
              </form>
            </div>
          ) : (
            <div></div>
          )}

          <div className="input-group mb-3">
            <span className="input-group-text shadow rounded" id="basic-addon1">
              Genre One:
            </span>
            <input
              onChange={(event) => setArtistData({...artistData, genre_one: event.target.value})}
              type="text"
              id="genre_one"
              className="form-control input_values artist_input_values"
              placeholder="Metal"
              aria-label="genre_one"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text shadow rounded" id="basic-addon1">
              Genre Two:
            </span>
            <input
              onChange={(event) => setArtistData({...artistData, genre_two: event.target.value})}
              type="text"
              id="genre_two"
              className="form-control input_values artist_input_values"
              placeholder="Country"
              aria-label="genre_two"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text shadow rounded" id="basic-addon1">
              Genre Three:
            </span>
            <input
              onChange={(event) => setArtistData({...artistData, genre_three: event.target.value})}
              type="text"
              id="genre_three"
              className="form-control input_values artist_input_values"
              placeholder="EDM"
              aria-label="genre_three"
              aria-describedby="basic-addon1"
            />
          </div>

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
                      onChange={(event) => setArtistData({...artistData, external_artist_website: event.target.value})}
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
                      onChange={(event) => setArtistData({...artistData, external_bandcamp: event.target.value})}
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
                      onChange={(event) => setArtistData({...artistData, external_soundcloud: event.target.value})}
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
                      onChange={(event) => setArtistData({...artistData, external_spotify: event.target.value})}
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
          <button onClick={() => artistSubmit()} id="sub-but" type="button" className="btn btn-primary btn-lg shadow-lg p-3 mb-5 bg-white rounded">
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
        <div className="d-flex justify-content-center ">
          <button className={artistState ? artistState : ""}id="set-signup" onClick={handleOnclick}> 
            Artist
          </button>
          <p id="or" className="d-flex justify-content-center">
            or
          </p>
          <button className={venueState ? venueState : ""}id="set-signup" onClick={handleOnclick}> 
            Venue
          </button>
        </div>

        {signUpForm}
      </div>
    </div>
  );
}

export default Signup;
