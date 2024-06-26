import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4255fe', padding: 10,
    margin: 10,
    width: '95%',
    borderRadius: 5,
    alignItems: 'center',
    elevation: 12,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
