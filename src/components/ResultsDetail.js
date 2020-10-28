import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
            { result.image_url == ''
            ? <Image 
            source={{uri: `https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png` }}
            style= {styles.image}
             />
            : <Image 
            source={{uri: `${result.image_url}` }}
            style= {styles.image}
             />}
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={{textAlign: 'center'}}>{result.rating} ⭐  |  {result.review_count} 💬</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    nameStyle:{
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    }
})

export default ResultsDetail