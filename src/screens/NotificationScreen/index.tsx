import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { AppNotification, NotificationData } from '../../components/ContentComponent/data';
import { styles } from './styles';

export function NotificationScreen() {
  const [notifications, setNotifications] = useState(NotificationData);

  const markAsRead = (id: string) => {
    setNotifications(current =>
      current.map(notification => notification.id === id ? { ...notification, read: true } : notification),
    );
  };

  const renderNotification = ({ item }: { item: AppNotification }) => (
    <TouchableOpacity
      onPress={() => markAsRead(item.id)}
      style={[styles.card, !item.read && styles.unread]}
      accessibilityRole="button"
    >
      <View style={styles.topLine}>
        <View style={styles.titleGroup}>
          <View style={[styles.dot, item.read && styles.readDot]} />
          <Text style={styles.name}>{item.title}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.action}>{item.read ? 'Đã đọc' : 'Nhấn để đánh dấu đã đọc'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông báo</Text>
      <Text style={styles.subtitle}>
        Bạn có {notifications.filter(item => !item.read).length} thông báo chưa đọc
      </Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderNotification}
      />
    </View>
  );
}
