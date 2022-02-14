import React from "react";
import { FlatList, View } from "react-native";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { MOCKS } from "../../mocks";
import { colors, theme } from "../../theme/global";

export function Services() {
  return (
    <View style={[theme.container, { backgroundColor: colors.darkBlue }]}>
      <FlatList
        bounces={false}
        data={MOCKS.services}
        renderItem={({ item }) => <Card item={item} />}
        ItemSeparatorComponent={() => <View style={theme.separator} />}
        ListFooterComponent={() => <View style={theme.separator} />}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header title="Services" />}
      />
    </View>
  );
}
