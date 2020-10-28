import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ResultsShowScreen = () => {
    return(
        <View>
            <Text style={styles.headerStyle}>ResultsShow</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default ResultsShowScreen