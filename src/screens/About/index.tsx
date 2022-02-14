import React from "react";
import { FlatList, Text, View } from "react-native";
import Header from "../../components/Header";
import { colors, theme } from "../../theme/global";

export function About() {
  return (
    <View style={[theme.container, { backgroundColor: colors.darkBlue }]}>
      <FlatList
        bounces={false}
        data={[1]}
        renderItem={({ item }) => (
          <View style={theme.wrapper}>
            <Text style={[theme.wrapperText]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis sed
              ipsum magni consequuntur repellat veritatis minima, quia
              cupiditate itaque unde aspernatur eligendi adipisci magnam.
              Corrupti voluptatibus temporibus cupiditate maiores ad.
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={theme.separator} />}
        ListFooterComponent={() => <View style={theme.separator} />}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header title="This page is about" />}
      />
    </View>
  );
}
