import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { fontFamily } from "../../theme";

export const styles = StyleSheet.create({
  input: { height: 50, backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 14, paddingHorizontal: 15, marginBottom: 14, color: colors.text, fontFamily, fontSize: 15 },
});