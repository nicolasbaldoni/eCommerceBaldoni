import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const SliderItem = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: item }}
            />
        </View>
    )
}

export default SliderItem

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: Dimensions.get('window').width
    },
    image: {
        width: '100%',
        height: 250,
        marginVertical: 10
    }
})