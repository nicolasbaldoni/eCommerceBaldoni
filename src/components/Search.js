import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import {colors} from '../global/colors'

const Search = ({ onSearch }) => {

    const [input, setInput] = useState('')

    const search = () => {
        onSearch(input)
    }

    const removeInput = () => {
        setInput('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholderTextColor='#fff'
                placeholder='Buscar producto...'
            />
            <Pressable onPress={search}>
                <AntDesign name='search1' size={25} color='black' />
            </Pressable>
            <Pressable onPress={removeInput}>
                <Entypo name='circle-with-cross' size={25} color='black' />
            </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
        paddingLeft: 20
    },
    input: {
        color: 'white',
        backgroundColor: colors.green3,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.lightGray,
        width: '80%',
        fontSize: 20,
    }
})