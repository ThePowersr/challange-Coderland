import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from '../atoms/Button';

interface TaskFormProps {
  onSubmit: (description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task description"
        value={description}
        onChangeText={setDescription}
      />
      <Button
        title="Add Task"
        onPress={() => {
          if (description.trim()) {
            onSubmit(description);
            setDescription('');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
  },
});

export default TaskForm;
