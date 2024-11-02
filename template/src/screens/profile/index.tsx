import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './profile.style';
import {commonStyles} from '@src/shared/styles';

const ProfileScreen = ({navigation}): React.JSX.Element => {
  return (
    <View style={commonStyles.container}>
      <Text style={styles.highlight}>Profile</Text>
      <Pressable
        style={commonStyles.btn}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Text style={commonStyles.lable}>Open Drawer</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
