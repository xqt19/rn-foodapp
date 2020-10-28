import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage, searchFlag] = useRestaurants()

    return(
        <View style = {styles.mainView}>
            <SearchBar 
            term={term} 
            termChangeFunction={setTerm}
            termSubmitFunction={() => {searchApi(term)}}
            />
            <View>
                {errorMessage != '' && <Text style={styles.headerStyle}>{errorMessage}</Text>}
                {searchFlag  
                ?<Text style={styles.headerStyle}>We have found {results.length} {results.length == 1 ? 'result' : `results`}</Text> 
                :<Text style={styles.headerStyle}>Its empty here! Get searching!</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        top: 20
    },

    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default SearchScreen