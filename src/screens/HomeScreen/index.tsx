import React, { useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import ContentComponent from '../../components/ContentComponent';
import { UserData } from '../../components/ContentComponent/data';
import { SearchComponent } from '../../components/SearchComponent';
import { styles } from './styles';

export function HomeScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const conversations = useMemo(
    () => UserData.filter(user => user.name.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View>
          <Text style={styles.title}>Tin nhắn</Text>
          <Text style={styles.subtitle}>Kết nối với mọi người</Text>
        </View>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{conversations.length}</Text>
        </View>
      </View>
      <SearchComponent value={search} onChange={setSearch} placeholder="Tìm cuộc trò chuyện..." />
      <Text style={styles.sectionTitle}>Gần đây</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContentComponent
            name={item.name}
            description={item.description}
            time={item.time}
            avatarUrl={item.avatarUrl}
            unread={item.unread}
            online={item.online}
            onPress={() => navigation.navigate('Chat', { contactId: item.id })}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Không tìm thấy cuộc trò chuyện.</Text>}
      />
    </View>
  );
}
