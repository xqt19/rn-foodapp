import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, termChangeFunction, termSubmitFunction}) => {
    return(
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput 
                placeholder="Pasta"
                style={styles.InputStyle}
                value ={term}
                onChangeText={termChangeFunction}
                onEndEditing={termSubmitFunction}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(220,220,220)', //'#F0EEEE',
        height: 50,
        borderRadius: 100,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    iconStyle:{
        alignSelf: 'center',
        left: 10
    },
    InputStyle: {
        textAlign: "center",
        fontSize: 30,
        flex: 1  
    },
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    },
    
})

export default SearchBar
