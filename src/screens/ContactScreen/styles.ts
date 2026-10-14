import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20, paddingTop: 22 },
  eyebrow: { color: colors.primary, fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 5 },
  title: { color: colors.text, fontFamily, fontSize: 27, fontWeight: '800', lineHeight: 34 },
  subtitle: { color: colors.muted, fontFamily, fontSize: 14, lineHeight: 20, marginTop: 4, marginBottom: 18 },
  sectionTitle: { color: colors.text, fontFamily, fontSize: 15, fontWeight: '700', lineHeight: 21, marginTop: 8, marginBottom: 6 },
  contactCount: { color: colors.primary, fontFamily, fontSize: 13 },
  list: { paddingBottom: 16 },
  empty: { color: colors.muted, textAlign: 'center', marginTop: 30 },
});