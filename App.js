
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ProductsUpload from './src/screens/ProductsUpload';
import DataList from './src/screens/DataList';
// import Splashscreen from './src/screens/Splashscreen';
import DisplayProduct from './src/screens/DisplayProduct';

const Stack = createStackNavigator();


const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ProductsUpload" component={ProductsUpload} />
        <Stack.Screen name="DataList" component={DataList} />
        <Stack.Screen name="DisplayProduct" component={DisplayProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;