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
  topBgColor: {
    backgroundColor: colors.yellow,
  },
  bottomBgColor: {
    backgroundColor: colors.yankees,
  },
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  wrapperText: {
    fontSize: 16,
    lineHeight: 23,
    color: colors.white,
  },
  safeAreaBottom: {
    flex: 0,
  },
  horizontalSpacing: {
    paddingHorizontal: 16,
  },
  header: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    justifyContent: "center",
  },
  separator: {
    marginTop: 8,
    marginBottom: 8,
  },
});
