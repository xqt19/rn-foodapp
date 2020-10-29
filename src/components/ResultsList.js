import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
    return (!results.length) 
    ? null
    :(
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor = {result => result.id } // specify the key
            renderItem = { ({item}) => {
                return (
                    <TouchableOpacity onPress={()=>{navigation.navigate('ResultsShow',{id: item.id})}}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 15,
    }
})

export default withNavigation(ResultsList)