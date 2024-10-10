import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShadowWrapper = ({ style, children }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

export default ShadowWrapper

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})