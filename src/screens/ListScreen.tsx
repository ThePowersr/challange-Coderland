import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useData from '../hooks/useData';

const ListScreen: React.FC = () => {
  const { users, loading, error } = useData();
  const { top } = useSafeAreaInsets();

  if (loading) {
    return <ActivityIndicator testID='loading-indicator' size="large" color='#4255fe' style={{ top }} />
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    )
  }

  return (
    <FlatList
      style={{
        marginTop: top,
      }}
      testID='flatlist'
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image
            source={require('../../assets/userIcon.png')}
            style={styles.image}
          //onLoad={(e) => e.currentTarget.setNativeProps({ source: [userIcon] })}
          //onError={(e) => e.currentTarget.setNativeProps({ src: [userIcon] })}
          />
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 20
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  errorText: {
    color: 'red',
    fontSize: 20
  }
});

export default ListScreen;
