import React from "react";
import { Text, View } from "react-native";
import { colors, theme } from "../../theme/global";

export default function Header({ title }: { title: string }) {
  return (
    <View style={[theme.header, theme.topBgColor]}>
      <Text style={{ color: colors.white, fontSize: 22 }}>{title}</Text>
    </View>
  );
}
