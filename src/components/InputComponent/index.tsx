import React from 'react';
import { TextInput } from 'react-native';
import { InputComponentProps } from './types';
import { styles } from './styles';

export function InputComponent({ label, value, onChange, secureTextEntry = false }: InputComponentProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={label}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      accessibilityLabel={label}
    />
  );
}
