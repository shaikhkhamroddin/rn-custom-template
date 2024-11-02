import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeStack from './stack';
import Drawer from './drawer';

type RootStackParamList = {
  Drawer: undefined;
  HomeStack: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
type NavigatorProps = {};

const RootNavigator: React.FC<NavigatorProps> = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false, cardStyle: {opacity: 1}}}>
      <RootStack.Screen name="Drawer" component={Drawer} />
      {/* <RootStack.Screen name={'HomeStack'} component={HomeStack} /> */}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
