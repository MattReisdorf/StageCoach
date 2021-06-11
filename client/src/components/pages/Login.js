import React, { Component, useEffect } from "react";
import loginApi from "../../utils/loginStuff";
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import "../css/Login.css";


export default function Login() {
    const [venueState, setVenueState] = React.useState(null);
    const [artistState, setArtistState] = React.useState(null);

    const cookies = new Cookies();

    const [loginType, setLoginType] = React.useState("");
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    });
    const [submitClicked, setSubmitClicked] = React.useState(false)

    useEffect(() => {
        if (loginType === 'Venue'){
            console.log(userData)
            loginApi.loginVenue(userData).then((success) => {
                alert('Venue login successful')
                cookies.set('id', success.data.user.id, { path: '/' })
                return window.location.assign('/')
            }).catch((err) => {
                alert('Invalid username or password!')
                return window.location.assign('/login');
            })

        } else if (loginType === 'Artist'){
            console.log(userData)
            loginApi.loginArtist(userData).then((success) => {
                alert('Artist login successful')
                cookies.set('id', success.data.user.id, { path: '/' })
                return window.location.assign('/')
            }).catch((err) => {
                alert('Invalid username or password!')
                return window.location.assign('/login');
            })
        }
    }, [submitClicked]);

    const handleOnclick = (e)=>{
        console.log(e.target.textContent);
        setLoginType(e.target.textContent);
        if (e.target.textContent === 'Artist'){
          setArtistState('pressed');
          setVenueState(null)
        }else if (e.target.textContent === 'Venue'){
          setArtistState(null);
          setVenueState('pressed');
        }
      }

    return (
    <div className="home-background">
        <div className="container">
            <h1 id="top-signup">Log in as a...</h1>

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

            <div>
            <div id="card-contain">
            <div className="card shadow-lg p-3 mb-5 shadow bg-white rounded">   
                <form>
                    <div class="input-group mb-3">
                        <span className="input-group-text shadow-lg" id="basic-addon1">Username:</span>
                        <input onChange={(event) => setUserData({...userData, username: event.target.value})} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text shadow-lg" id="basic-addon1">Password:</span>
                        <input onChange={(event) => setUserData({...userData, password: event.target.value})} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                    </div>
                    <div id="sub-but-div">
                    <button id="sub-but" type="button" onClick={() => setSubmitClicked(true)} className="btn btn-primary btn-lg shadow-lg p-3 mb-5 bg-white rounded">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    </div>
    )
}