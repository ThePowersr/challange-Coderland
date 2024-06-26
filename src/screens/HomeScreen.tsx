import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/atoms/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Tasks" onPress={() => navigation.navigate('Tasks')} />
      <Button title="List" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
