import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/home';
import React from 'react';
import ProfileScreen from '@screens/profile';

type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
};
const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
