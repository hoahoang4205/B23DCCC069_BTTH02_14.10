import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ContentComponentProps } from './types';
import { styles } from './styles';

export default function ContentComponent({
  name,
  description,
  time,
  avatarUrl,
  unread = 0,
  online = false,
  onPress,
}: ContentComponentProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [avatarUrl]);

  return (
    <TouchableOpacity style={styles.row} onPress={onPress} accessibilityRole="button">
      <View style={styles.avatar}>
        {!avatarUrl || imageFailed ? (
          <Text style={styles.avatarText}>{name.charAt(0).toUpperCase()}</Text>
        ) : (
          <Image
            source={{ uri: avatarUrl }}
            style={styles.avatarImage}
            onError={() => setImageFailed(true)}
          />
        )}
        {online && <View style={styles.onlineDot} />}
      </View>
      <View style={styles.details}>
        <View style={styles.topLine}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.bottomLine}>
          <Text style={styles.description} numberOfLines={1}>{description}</Text>
          {unread > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
