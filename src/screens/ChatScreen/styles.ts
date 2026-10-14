import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: 14, backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.border },
  backButton: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  back: { color: colors.primary, fontFamily, fontSize: 32, fontWeight: '500' },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: colors.pale, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  avatarImage: { width: 42, height: 42, borderRadius: 21 },
  avatarText: { color: colors.primary, fontFamily, fontSize: 17, fontWeight: '700' },
  title: { color: colors.text, fontFamily, fontSize: 16, fontWeight: '700', lineHeight: 21 },
  status: { color: '#22a06b', fontFamily, fontSize: 12, lineHeight: 17, marginTop: 2 },
  messages: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },
  bubble: { maxWidth: '80%', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 18, marginVertical: 5 },
  myBubble: { alignSelf: 'flex-end', backgroundColor: colors.primary, borderBottomRightRadius: 5 },
  theirBubble: { alignSelf: 'flex-start', backgroundColor: colors.surface, borderBottomLeftRadius: 5 },
  myText: { color: colors.surface, fontFamily, fontSize: 15, lineHeight: 21 },
  theirText: { color: colors.text, fontFamily, fontSize: 15, lineHeight: 21 },
  myTime: { color: '#dfe2ff', fontFamily, fontSize: 10, textAlign: 'right', marginTop: 5 },
  theirTime: { color: colors.muted, fontFamily, fontSize: 10, textAlign: 'right', marginTop: 5 },
  composer: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.border },
  input: { flex: 1, minHeight: 44, backgroundColor: colors.background, borderRadius: 16, paddingHorizontal: 15, color: colors.text, fontFamily, fontSize: 14 },
  send: { paddingHorizontal: 14, paddingVertical: 12, marginLeft: 6 },
  sendText: { color: colors.primary, fontFamily, fontWeight: '700', fontSize: 14 },
});
