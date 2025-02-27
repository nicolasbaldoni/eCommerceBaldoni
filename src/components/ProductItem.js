import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({product}) => {

    const {width, height} = useWindowDimensions()
    const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("Detail",{id:product.id})}>
      <Text style={[styles.title,width < 300 ? styles.titleMin: styles.titleMax]}>{product.title}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri:product.thumbnail}}
      />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green1,
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        width:"90%",
        marginHorizontal:"5%",
        gap:10,
        borderRadius:3
    },
    title:{
        width:"70%"
    },
    image:{
        width:64,
        height:64,
        borderRadius:3
    }
})