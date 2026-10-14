import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { fontFamily } from "../../theme";

export const styles = StyleSheet.create({
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: colors.surface, fontFamily, fontWeight: '700', fontSize: 16, lineHeight: 22 },
});