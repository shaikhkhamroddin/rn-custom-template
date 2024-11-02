import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'; /** slidebutton fix for some android */
import './shared/localization';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import SentryModuleInstance from './utils/sentry/SentryModule';
import {store} from './redux/store';
import RootNavigator from './navigation';

const App = () => {
  SentryModuleInstance.SentryInitialize();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <RootNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
// export default SentryModuleInstance.WrapApp(App);

const styles = StyleSheet.create({
  container: {flex: 1},
});
