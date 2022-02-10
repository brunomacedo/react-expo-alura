import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import { Services } from "./src/screens/Services";
import { theme } from "./src/theme/global";

export default function App() {
  return (
    <SafeAreaView style={theme.container}>
      <Services />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
