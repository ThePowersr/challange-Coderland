import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/Navigator';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='white' />
      <AppNavigator />
    </Provider>
  );
}
