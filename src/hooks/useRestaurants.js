import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]) //a state to hold the yelp API data
    const [errorMessage, setErrorMessage] = useState('')
    const [searchFlag, setSearchFlag] = useState(false)
    const searchApi = async (searchTerm) => {
        // console.log("making an API call...")
        try {
            const response = await yelp.get(`/search`, {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'singapore'
                }
            }) //https://www.yelp.com/developers/documentation/v3/business/search?limit=50...
            setResults(response.data.businesses)
            setErrorMessage('')
            setSearchFlag(true)
        }
        catch(err){
            setErrorMessage('Something Went Wrong!')
            setSearchFlag(false)
        }
    }

    //call the searchAPI immediately when component mounts
    useEffect(()=>{
        searchApi('pasta')
    }, []) // this means this fuction will only run once, when the component mounts

    return [searchApi, results, errorMessage, searchFlag]
}