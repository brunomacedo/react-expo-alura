import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Heart } from "phosphor-react-native";
import { Services } from "../screens/Services";
import { colors } from "../theme/global";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveBackgroundColor: colors.yankees,
          tabBarActiveTintColor: colors.white,
          tabBarIconStyle: {
            color: colors.red,
          },
        }}
      >
        <Tab.Screen
          name="Services"
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Heart color={colors.red} weight="fill" size={32} />;
            },
          }}
          component={Services}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
