import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.sofascore.com/api/v1/'
})

export default instance;