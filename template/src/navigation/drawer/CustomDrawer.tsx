import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {Text} from 'react-native';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Custom Drawer</Text>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
