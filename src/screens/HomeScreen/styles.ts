import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20, paddingTop: 22 },
  heading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 },
  eyebrow: { color: colors.primary, fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 5 },
  title: { color: colors.text, fontFamily, fontSize: 27, fontWeight: '800', lineHeight: 34 },
  subtitle: { color: colors.muted, fontFamily, fontSize: 14, lineHeight: 20, marginTop: 4 },
  countBadge: { width: 42, height: 42, borderRadius: 14, backgroundColor: colors.pale, alignItems: 'center', justifyContent: 'center' },
  countText: { color: colors.primary, fontFamily, fontSize: 16, fontWeight: '700' },
  sectionTitle: { color: colors.text, fontFamily, fontSize: 16, fontWeight: '700', lineHeight: 22, marginTop: 8, marginBottom: 6 },
  list: { paddingBottom: 16 },
  empty: { color: colors.muted, textAlign: 'center', marginTop: 30 },
});