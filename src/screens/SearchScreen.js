import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const SearchScreen = () => {
    return(
        <View>
            <Text style={styles.headerStyle}>Search Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default SearchScreen