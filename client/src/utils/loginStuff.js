import axios from "axios";

const login = {
    loginVenue: function (userData) {
        console.log(userData)
        return axios({
            method: 'post',
            url: '/api/login/venue',
            data: userData
        })
    },
    loginArtist: function (userData) {
        console.log(userData)
        return axios({
            method: 'post',
            url: '/api/login/artist',
            data: userData
        })
    }
}

export default login;