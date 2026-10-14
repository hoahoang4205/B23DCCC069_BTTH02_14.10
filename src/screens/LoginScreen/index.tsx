import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import ButtonComponent from '../../components/ButtonComponent';
import { InputComponent } from '../../components/InputComponent';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Thiếu thông tin', 'Vui lòng nhập tài khoản và mật khẩu.');
      return;
    }
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandIcon}><Text style={styles.brandEmoji}>💬</Text></View>
      <Text style={styles.welcome}>Chào mừng bạn!</Text>
      <Text style={styles.logo}>ChatApp</Text>
      <Text style={styles.subtitle}>Đăng nhập để kết nối với bạn bè</Text>
      <InputComponent label="Tài khoản" value={username} onChange={setUsername} />
      <InputComponent label="Mật khẩu" value={password} onChange={setPassword} secureTextEntry />
      <ButtonComponent title="Đăng nhập" onPress={login} />
      <Text style={styles.hint}>Nhập tài khoản bất kỳ để bắt đầu</Text>
    </View>
  );
}
