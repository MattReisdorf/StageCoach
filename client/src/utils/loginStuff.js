import axios from "axios";

const login = {
    loginVenue: function (userData) {
        return axios({
            method: 'post',
            url: '/api/login/venue',
            data: userData
        })
    },
    loginArtist: function (userData) {
        return axios({
            method: 'post',
            url: '/api/login/artist',
            data: userData
        })
    },
    logout: function() {
        console.log('Hitting logout route frontend')
        return axios({
            method: 'DELETE',
            url: '/api/login/logout'
        })
    }
}

export default login;