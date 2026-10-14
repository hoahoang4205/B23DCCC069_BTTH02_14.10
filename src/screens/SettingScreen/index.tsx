import React from 'react';
import { Alert, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import ButtonComponent from '../../components/ButtonComponent';
import { styles } from './styles';

export function SettingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logout = () => {
    Alert.alert('Đăng xuất', 'Bạn có chắc muốn đăng xuất?', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Đăng xuất', style: 'destructive', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Login' }] }) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cài đặt</Text>
      <View style={styles.profile}>
        <View style={styles.avatar}><Text style={styles.avatarText}>B</Text><View style={styles.onlineDot} /></View>
        <Text style={styles.name}>Bạn</Text>
        <Text style={styles.email}>Tài khoản ChatApp</Text>
        <View style={styles.memberBadge}><Text style={styles.memberText}>Thành viên ChatApp</Text></View>
      </View>
      <Text style={styles.sectionTitle}>Tài khoản của bạn</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoIcon}>✉</Text>
        <View><Text style={styles.infoLabel}>Tên hiển thị</Text><Text style={styles.infoValue}>Bạn</Text></View>
      </View>
      <ButtonComponent title="Đăng xuất" onPress={logout} />
    </View>
  );
}
