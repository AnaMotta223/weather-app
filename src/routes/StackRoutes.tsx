import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="Error" component={Error} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}