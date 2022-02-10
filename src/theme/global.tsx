import { StyleSheet } from "react-native";

export const colors = {
  bleu: "#3584E0",
  darkBlue: "#666A8F",
  gray: "#EBEDF1",
  green: "#00D27C",
  red: "#FF0136",
  white: "#FAFBFC",
  yankees: "#2B2845",
  yellow: "#FF9F26",
};

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  horizontalSpacing: {
    paddingHorizontal: 16,
  },
  header: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    backgroundColor: colors.yankees,
    justifyContent: 'center',
  },
  separator: {
    marginTop: 8,
    marginBottom: 8,
  },
});
