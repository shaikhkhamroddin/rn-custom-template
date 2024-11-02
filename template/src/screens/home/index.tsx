import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './home.style';
import {t} from 'i18next';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {setName} from '../../redux/homeslice';
import {commonStyles} from '@src/shared/styles';

function HomeScreen({navigation}): React.JSX.Element {
  const dispatch = useAppDispatch();
  const {name} = useAppSelector(state => state.home);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setName('React Native'));
    }, 1000);
  }, []);

  return (
    <View style={commonStyles.container}>
      <Text style={styles.highlight}>
        {t('hey')} {name} Developer
      </Text>
      <Pressable
        style={commonStyles.btn}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={commonStyles.lable}>Navigate to profile</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
