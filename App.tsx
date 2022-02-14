import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";

import Routes from "./src/routes";
import { colors, theme } from "./src/theme/global";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={[theme.container, theme.topBgColor]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={theme.container}
        >
          <Routes />
        </KeyboardAvoidingView>
        <StatusBar style="light" backgroundColor={theme.topBgColor.backgroundColor} />
      </SafeAreaView>
      <SafeAreaView style={[theme.safeAreaBottom, theme.bottomBgColor]} />
    </>
  );
}
