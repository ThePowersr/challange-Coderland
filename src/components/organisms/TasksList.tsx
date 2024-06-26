import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TasksList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <FlatList
      style={{
        marginTop: 20,
      }}
      showsVerticalScrollIndicator={false}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.description}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#ccc',
  },
  textItem: {
    fontWeight: '900',
    fontSize: 20,
  }
});

export default TasksList;
