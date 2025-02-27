import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'

import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shop'
import { clearCart } from '../features/cart/cartSlice'

const Cart = ({navigation}) => {
  const cart = useSelector(state => state.cart)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      ...cart,
      createdAt
    }
    triggerPostOrder({userId:"1",order})
    dispatch(clearCart())
    navigation.navigate("OrdersStack")

  }
  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item => item.id}
      renderItem={({item})=> <CartItem item={item}/> }
      />
      <View style={styles.containerConfirm}>
      <Pressable onPress={handleAddOrder}>
        <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: {cart.total} $</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex:1
    },
    containerConfirm:{
        backgroundColor:colors.green2,
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textConfirm:{
        color:"white",
        fontSize:20
    }
})