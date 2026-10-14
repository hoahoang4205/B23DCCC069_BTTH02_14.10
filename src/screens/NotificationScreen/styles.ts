import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20, paddingTop: 22 },
  eyebrow: { color: colors.primary, fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 5 },
  title: { color: colors.text, fontFamily, fontSize: 27, fontWeight: '800', lineHeight: 34 },
  subtitle: { color: colors.muted, fontFamily, fontSize: 14, lineHeight: 20, marginTop: 4, marginBottom: 18 },
  list: { paddingBottom: 16 },
  card: { padding: 16, borderRadius: 16, backgroundColor: colors.surface, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  unread: { backgroundColor: colors.pale, borderColor: '#dfe3ff' },
  topLine: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  titleGroup: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.primary, marginRight: 9 },
  readDot: { backgroundColor: '#c6cad4' },
  name: { color: colors.text, fontFamily, fontSize: 15, fontWeight: '700', lineHeight: 21 },
  time: { color: colors.muted, fontFamily, fontSize: 12, lineHeight: 17 },
  description: { color: '#586276', fontFamily, fontSize: 14, lineHeight: 21 },
  action: { color: colors.primary, fontFamily, fontSize: 12, fontWeight: '600', lineHeight: 18, marginTop: 10 },
});