/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash1, Splash2, Splash3, Splash4} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash1">
        <Stack.Screen name="Splash1" component={Splash1} />
				<Stack.Screen name="Splash2" component={Splash2} />
				<Stack.Screen name="Splash3" component={Splash3} />
				<Stack.Screen name="Splash4" component={Splash4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
