import { StyleSheet } from "react-native";
import { colors } from "../../theme/global";

interface IProps {
  button: "primary" | "outlined" | "disabled";
}

export const styles = (props?: IProps) => {
  const button = props?.button || "primary";

  return StyleSheet.create({
    card: {
      padding: 20,
      borderRadius: 8,
      backgroundColor: colors.gray,
    },
    card2: {
      flex: 1,
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    price: {
      fontSize: 25,
      fontWeight: "800",
      color: colors.yankees,
      textAlign: "right",
    },
    name: {
      fontSize: 20,
      fontWeight: "500",
      color: colors.yellow,
    },
    description: {
      fontSize: 16,
      color: colors.yankees,
      fontWeight: "300",
    },
    action: {
      flexDirection: "row",
      alignItems: "center",
    },
    label: {
      fontSize: 12,
      fontWeight: "600",
      marginRight: 10,
    },
    input: {
      textAlign: "center",
      backgroundColor: colors.white,
      height: 35,
      marginTop: 4,
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: button === "outlined" ? colors.white : colors.green,
      borderColor: button === "outlined" ? colors.green : colors.white,
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 4,
    },
    buttonText: {
      color: button === "outlined" ? colors.green : colors.white,
    },
  })
}

styles.defaultProps = {
  button: "primary",
};
