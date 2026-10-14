import React, { useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../../App';
import ContentComponent from '../../components/ContentComponent';
import { ContactData } from '../../components/ContentComponent/data';
import { SearchComponent } from '../../components/SearchComponent';
import { styles } from './styles';

export function ContactScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const contacts = useMemo(
    () => ContactData.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh bạ</Text>
      <Text style={styles.subtitle}>Tìm và trò chuyện với bạn bè</Text>
      <SearchComponent value={search} onChange={setSearch} placeholder="Tìm danh bạ..." />
      <Text style={styles.sectionTitle}>Tất cả liên hệ <Text style={styles.contactCount}>{contacts.length}</Text></Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <ContentComponent
              name={item.name}
              description={item.online ? 'Đang hoạt động' : 'Ngoại tuyến'}
              time=""
              avatarUrl={item.avatarUrl}
              online={item.online}
              onPress={() => navigation.navigate('Chat', { contactId: item.id })}
            />
          );
        }}
        ListEmptyComponent={<Text style={styles.empty}>Không tìm thấy liên hệ.</Text>}
      />
    </View>
  );
}
