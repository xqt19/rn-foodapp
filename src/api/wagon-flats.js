import axios from 'axios'

export default axios.create({
    baseURL: 'https://raw.githubusercontent.com/xqt19/react-flats/master/assets/data/flats.js'
})