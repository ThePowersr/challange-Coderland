import React from 'react';
import { View, Modal, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import TasksList from '../components/organisms/TasksList';
import TaskForm from '../components/molecules/TaskForm';
import { addTasks } from '../redux/slices/tasksSlice';
import Button from '../components/atoms/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appDispatch } from '../redux/store';

const TasksScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const useAppDispatch = useDispatch.withTypes<appDispatch>()
  const dispatch = useAppDispatch();
  const { top } = useSafeAreaInsets();

  const handleAddTask = (description: string) => {
    dispatch(addTasks({ id: new Date().toISOString(), description }));
    setModalVisible(false);
  };

  return (
    <View style={{ ...styles.container, paddingTop: top }} >
      <Button title="Add New Task" onPress={() => setModalVisible(true)} />
      <TasksList />
      <Modal visible={modalVisible} animationType="slide" testID='modal'>
        <View style={styles.modal}>
          <TaskForm onSubmit={handleAddTask} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: '5%',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});

export default TasksScreen;
