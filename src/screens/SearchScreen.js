import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage, searchFlag, currentTerm] = useRestaurants()
    // results = [{},{},{}]
    // refer to https://www.yelp.com/developers/documentation/v3/business_search to see whats inside results

    const filterResultsByPrice = (price)=>{
        return results.filter(result =>{
            return result.price == price
            // given an argument price tier ($, $$, $$$, or $$$$), return only the results that match that price tier 
        })
    }

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
                ?<Text style={styles.headerStyle}>{results.length} {results.length == 1 ? 'result' : `results`} for '{currentTerm}'</Text> 
                :<Text style={styles.headerStyle}>Its empty here! Get searching!</Text>
                }
            </View>
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
                <ResultsList title="Bit Pricey" results={filterResultsByPrice('$$')}/>
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        top: 5,
        flex: 1
    },

    headerStyle: {
        textAlign: "center",
        fontSize: 30,
        marginBottom: 5,
    }
})

export default SearchScreen