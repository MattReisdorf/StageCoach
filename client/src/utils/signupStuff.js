import axios from "axios";

const signUp = {
    signupVenue: function (userData) {
        console.log('VENUE SIGNUPSTUFF HIT', userData)
        return axios({
            method: 'POST',
            url: '/api/signup/venue',
            data: userData
        })
    },
    signupArtist: function (userData) {
        console.log('SIGNUP ARTIST FRONTEND HIT')
        return axios({
            method: 'POST',
            url: '/api/signup/artist',
            data: userData
        })
    }
}

export default signUp;