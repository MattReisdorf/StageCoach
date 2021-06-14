import axios from "axios";

const createShow = {
    create: function (showData) {
        console.log('show signup stuff hit', showData)
        return axios({
            method: 'POST',
            url: '/api/shows/newshow',
            data: showData
        })
    }
}

export default createShow;