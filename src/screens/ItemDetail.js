import { Dimensions, Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import { colors } from '../global/colors'
import { addItemCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetProductQuery } from '../services/shop'
import Slider from '../components/Slider'


const ItemDetail = ({route}) => {

  

  const {id} = route.params
  const {data:products,isSuccess,isLoading,isError,error} = useGetProductQuery(id)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleAddItemCart = () => {
    dispatch(addItemCart({...products,quantity:1}))
    navigation.navigate("CartStack")
  }

  const data = [
    {id: 1, title: 'Prueba'},
    {id: 2, title: 'Prueba2'}
  ];

  const _renderItem = ({item, index}) => {
    return <Text>{item.title}</Text>
  }

  if(isLoading) return <View><Text>cargando</Text></View>
  if(isError) return <View><Text>{error.message}</Text></View>
  if(isSuccess){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerDetail}>
        <Slider data={products.images}/>
        
        <View style={styles.containerText}>
          <Text style={styles.title}>{products.title}</Text>
          <Text style={styles.description}>{products.description}</Text>
          <Text style={styles.price}>Precio: {products.price} $</Text>
        </View>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
} else {
  <View><Text>Data not found</Text></View>
}
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    width:"100%"
  },
  containerDetail:{
    paddingBottom:'10%'
  },
  containerText:{
    width:"80%",
    gap:20,
    margin:20,
    marginHorizontal:"10%"
  },
  title:{
    fontSize:20
  },
  description:{
    fontSize:18
  },
  price:{
    fontSize:20,
    fontWeight:'bold'
  },
  image:{
    width:"100%",
    height:250,
    marginVertical:10
  },
  button:{
    width:"80%",
    marginHorizontal:"10%",
    backgroundColor:colors.green3,
    borderRadius:3,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:20

  },
  buttonText:{
    color:"white"
  },
  caroulsel:{
    flex: 1
  }
})