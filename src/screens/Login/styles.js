import { StyleSheet } from "react-native";

export default function createStyles(colors) {
  return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900",
  },
  });
}
