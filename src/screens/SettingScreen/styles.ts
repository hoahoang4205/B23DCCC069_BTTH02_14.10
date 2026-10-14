import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20, paddingTop: 22 },
  eyebrow: { color: colors.primary, fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 5 },
  title: { color: colors.text, fontFamily, fontSize: 27, fontWeight: '800', lineHeight: 34, marginBottom: 20 },
  profile: { alignItems: 'center', backgroundColor: colors.surface, borderRadius: 20, paddingVertical: 24, marginBottom: 24, borderWidth: 1, borderColor: colors.border },
  avatar: { width: 78, height: 78, borderRadius: 39, backgroundColor: colors.pale, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarText: { color: colors.primary, fontFamily, fontSize: 30, fontWeight: '700' },
  onlineDot: { position: 'absolute', right: 2, bottom: 3, width: 14, height: 14, borderRadius: 7, backgroundColor: '#22c55e', borderWidth: 2, borderColor: colors.surface },
  name: { color: colors.text, fontFamily, fontSize: 19, fontWeight: '700', lineHeight: 26 },
  email: { color: colors.muted, fontFamily, fontSize: 14, marginTop: 5 },
  memberBadge: { marginTop: 12, backgroundColor: colors.pale, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6 },
  memberText: { color: colors.primary, fontFamily, fontSize: 12, fontWeight: '600' },
  sectionTitle: { color: colors.text, fontFamily, fontSize: 16, fontWeight: '700', lineHeight: 22, marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 14, marginBottom: 24 },
  infoIcon: { color: colors.primary, fontSize: 20, marginRight: 12 },
  infoLabel: { color: colors.muted, fontFamily, fontSize: 12, lineHeight: 17 },
  infoValue: { color: colors.text, fontFamily, fontSize: 14, fontWeight: '600', lineHeight: 20, marginTop: 3 },
});