import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Weather } from '../screens/Weather';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {

  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{animation: 'ios'}}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}