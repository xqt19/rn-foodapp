import axios from 'axios'
import {YELP_BEARER_TOKEN} from './secrets.js'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${YELP_BEARER_TOKEN}` 
    }
})