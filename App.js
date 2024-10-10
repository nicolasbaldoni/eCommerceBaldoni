import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { colors } from './src/global/colors'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'

export default function App() {

  return (
    <>
      <Provider store={store}>
      <MainNavigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  );
}

const styles = StyleSheet.create({});
