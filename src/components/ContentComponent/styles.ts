import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 12, marginBottom: 9, backgroundColor: colors.surface, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: colors.pale, alignItems: 'center', justifyContent: 'center' },
  avatarImage: { width: '100%', height: '100%', borderRadius: 25 },
  avatarText: { color: colors.primary, fontFamily, fontSize: 18, fontWeight: '700' },
  onlineDot: { position: 'absolute', right: 0, bottom: 0, width: 13, height: 13, borderRadius: 7, backgroundColor: '#22c55e', borderWidth: 2, borderColor: colors.surface },
  details: { flex: 1, marginLeft: 12 },
  topLine: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  bottomLine: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  name: { color: colors.text, fontFamily, fontSize: 15, fontWeight: '700', lineHeight: 20 },
  time: { color: colors.muted, fontFamily, fontSize: 12, lineHeight: 17 },
  description: { flex: 1, color: '#687386', fontFamily, fontSize: 13, lineHeight: 18, marginRight: 8 },
  badge: { minWidth: 21, height: 21, borderRadius: 11, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
  badgeText: { color: colors.surface, fontFamily, fontSize: 11, fontWeight: '700' },
});