import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawerContent from './CustomDrawer';
import HomeStack from '../stack';

const DrawerNavigator = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <DrawerNavigator.Screen name="HomeStack" component={HomeStack} />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
