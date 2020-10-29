import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
    const dogsounds = () => {
        console.log('bark bark bark')
    }
    const dogmessage = "What did the dog say"
    

    return [dogsounds, dogmessage]
}