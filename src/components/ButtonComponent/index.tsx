import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ButtonComponentProps } from './types';

export default function ButtonComponent({ onPress, title }: ButtonComponentProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} accessibilityRole="button">
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
