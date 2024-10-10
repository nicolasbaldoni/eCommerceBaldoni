import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CategoryItem from '../components/CategoryItem'

const Home = () => {
  return (
    <View style={styles.container}>
    <CategoryItem />
  </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})