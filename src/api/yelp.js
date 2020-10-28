import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PXbwz33xoEtmgdjmTikZKseoaqjrLpLCtU-ZmzKFtQgDbUBR6wrsDpch053rstQsCJdx2JdU6JJh4wm3SbNmi0kMFP-rpgJLxq_FPcs6GTEECWADQJkJv0tjICqZX3Yx' 
    }
})