import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import { MessageData, UserData } from '../../components/ContentComponent/data';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Chat'>;
type Message = (typeof MessageData)[number];

export function ChatScreen({ route, navigation }: Props) {
  const contact = UserData.find(user => user.id === route.params.contactId);
  const [messages, setMessages] = useState<Message[]>(() => (
    route.params.contactId === '1'
      ? MessageData
      : [
          { id: '1', sender: contact?.name ?? '', text: 'Chào bạn!', time: '09:30', mine: false },
          { id: '2', sender: 'Bạn', text: contact?.description ?? '', time: '09:32', mine: true },
        ]
  ));
  const [text, setText] = useState('');

  const sendMessage = () => {
    const message = text.trim();
    if (!message) return;
    setMessages(current => [
      ...current,
      { id: String(Date.now()), sender: 'Bạn', text: message, time: 'Bây giờ', mine: true },
    ]);
    setText('');
  };

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={goBack}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Quay lại"
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <View style={styles.avatar}>
          {contact?.avatarUrl ? (
            <Image source={{ uri: contact.avatarUrl }} style={styles.avatarImage} />
          ) : (
            <Text style={styles.avatarText}>{contact?.name.charAt(0).toUpperCase() ?? '?'}</Text>
          )}
        </View>
        <View>
          <Text style={styles.title}>{contact?.name ?? 'Trò chuyện'}</Text>
          <Text style={styles.status}>{contact?.online ? 'Đang hoạt động' : 'Ngoại tuyến'}</Text>
        </View>
      </View>
      <FlatList
        style={styles.messages}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.mine ? styles.myBubble : styles.theirBubble]}>
            <Text style={item.mine ? styles.myText : styles.theirText}>{item.text}</Text>
            <Text style={item.mine ? styles.myTime : styles.theirTime}>{item.time}</Text>
          </View>
        )}
      />
      <View style={styles.composer}>
        <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="Nhập tin nhắn..." />
        <TouchableOpacity style={styles.send} onPress={sendMessage}><Text style={styles.sendText}>Gửi</Text></TouchableOpacity>
      </View>
    </View>
  );
}
