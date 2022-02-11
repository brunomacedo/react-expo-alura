import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";

import { Services } from "./src/screens/Services";
import { colors, theme } from "./src/theme/global";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default function App() {
  return (
    <SafeAreaView
      style={[theme.container, { backgroundColor: colors.yankees }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={theme.container}
      >
        <Services />
      </KeyboardAvoidingView>
      <StatusBar style="light" backgroundColor={colors.yankees} />
    </SafeAreaView>
  );
}
