import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { fontFamily } from '../../theme';

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: colors.background, padding: 24 },
  brandIcon: { width: 76, height: 76, alignSelf: 'center', borderRadius: 26, backgroundColor: colors.pale, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  brandEmoji: { fontSize: 34 },
  welcome: { color: colors.text, fontFamily, fontSize: 25, fontWeight: '800', lineHeight: 33, textAlign: 'center' },
  logo: { color: colors.primary, fontFamily, fontSize: 16, fontWeight: '700', textAlign: 'center', marginTop: 6 },
  subtitle: { color: colors.muted, fontFamily, fontSize: 14, lineHeight: 20, textAlign: 'center', marginTop: 8, marginBottom: 30 },
  hint: { color: colors.muted, fontFamily, fontSize: 12, lineHeight: 18, textAlign: 'center', marginTop: 18 },
});