import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam("id")
    const [result, SetResult] = useState(null)

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        SetResult(response.data)
    }
    useEffect(() => { 
        getResult(id)
    }, [])


    return(

        <View>
            {result == null && <Text style={styles.headerStyle}>Oops Something went wrong!</Text>}
            {result && 
            <View>
                <Text style={styles.headerStyle}>{result.name}</Text>
                <FlatList 
                data = {result.photos}
                keyExtractor ={photo => photo}
                renderItem={({item}) =>{
                    return <Image style={styles.image} source ={{uri: item}} />
                }}
                />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    },
    image:{
        height: 200,
        width:300
    }
})

export default ResultsShowScreen