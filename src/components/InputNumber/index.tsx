import React, { useState } from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle } from "react-native";

interface IProps {
  styles: StyleProp<TextStyle>;
}

const verifyPrice = (price: string) => price.match(/^[0-9]*$/);
const nonLeftZero = (price: string) => price.replace(/^(0)(.+)/, "$2");

export const InputNumber: React.FC<IProps> = ({ styles }) => {
  const [value, setValue] = useState("0");

  return (
    <TextInput
      keyboardType="numeric"
      selectTextOnFocus
      maxLength={5}
      onChangeText={(getValue) => {
        if (verifyPrice(getValue)) {
          setValue(nonLeftZero(getValue));
        }
      }}
      value={value}
      style={styles}
    />
  );
};
