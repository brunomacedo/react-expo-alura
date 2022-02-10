import React from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";

interface IProps {
  styles: StyleProp<TextStyle>;
  value: string;
  onChangeText?: (text: string) => void;
}

export const InputNumber: React.FC<IProps> = ({
  styles,
  value,
  onChangeText,
}) => {
  const convertValue = String(value);

  return (
    <TextInput
      keyboardType="numeric"
      selectTextOnFocus
      maxLength={5}
      onChangeText={onChangeText}
      value={convertValue}
      style={styles}
    />
  );
};
