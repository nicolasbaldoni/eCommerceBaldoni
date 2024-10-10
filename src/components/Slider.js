import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'

const Slider = ({data}) => {
  return (
    <View>
      <FlatList 
      data={data} 
      renderItem={({item, index}) => <SliderItem item={item} index={index}/>}
      horizontal
      showsHorizontalScrollIndicator = {false}
      pagingEnabled />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})