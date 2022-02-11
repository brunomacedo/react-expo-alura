import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import Card from "../../components/Card";
import { MOCKS } from "../../mocks";
import { colors, theme } from "../../theme/global";

export function Services() {
  return (
    <View style={theme.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={theme.container}
      >
        <FlatList
          bounces={false}
          data={MOCKS.services}
          renderItem={({ item }) => <Card item={item} />}
          ItemSeparatorComponent={() => <View style={theme.separator} />}
          ListFooterComponent={() => <View style={theme.separator} />}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => (
            <View style={theme.header}>
              <Text style={{ color: colors.white, fontSize: 22 }}>
                Services
              </Text>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
