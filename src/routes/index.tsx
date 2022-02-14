import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Atom, Student } from "phosphor-react-native";
import { Services } from "../screens/Services";
import { colors, theme } from "../theme/global";
import { About } from "../screens/About";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarInactiveBackgroundColor: colors.red,
          tabBarInactiveTintColor: colors.white,
          tabBarActiveBackgroundColor: theme.bottomBgColor.backgroundColor,
          tabBarActiveTintColor: colors.white,
          tabBarItemStyle: {
            padding: 5,
            // ...theme.bottomBgColor,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            // backgroundColor: colors.red
          }
        }}
      >
        <Tab.Screen
          name="Services"
          options={{
            headerShown: false,

            tabBarIcon: () => {
              return <Atom color={colors.white} weight="fill" size={26} />;
            },
          }}
          component={Services}
        />
        <Tab.Screen
          name="About"
          options={{
            headerShown: false,

            tabBarIcon: () => {
              return <Student color={colors.white} weight="fill" size={26} />;
            },
          }}
          component={About}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
