import { Platform } from 'react-native';

export const colors = {
  primary: '#4f46e5',
  primaryDark: '#3730a3',
  background: '#f5f6fb',
  surface: '#ffffff',
  text: '#172033',
  muted: '#778196',
  border: '#e8eaf1',
  pale: '#eef2ff',
};

export const fontFamily = Platform.select({
  android: 'sans-serif-rounded',
  ios: 'Avenir Next',
  default: undefined,
});
