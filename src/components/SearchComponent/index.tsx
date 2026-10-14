import React from 'react';
import { TextInput } from 'react-native';
import { SearchComponentProps } from './types';
import { styles } from './styles';

export function SearchComponent({ value, onChange, placeholder = 'Tìm kiếm...' }: SearchComponentProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      autoCapitalize="none"
      clearButtonMode="while-editing"
      accessibilityLabel={placeholder}
    />
  );
}
