import React, { useState } from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import type { IServices } from "../../mocks/services";
import { theme } from "../../theme/global";
import formatPrice from "../../utils/formatPrice";
import { InputNumber } from "../InputNumber";
import { styles } from "./styles";

const verifyPrice = (price: string) => price.match(/^[0-9]*$/);
const nonLeftZero = (price: string) => price.replace(/^(0)(.+)/, "$2");

export default function Card({
  item: { key, name, price, description },
  boxStyle,
}: {
  item: IServices;
  boxStyle?: StyleProp<TextStyle>;
}) {
  const loadStyles = styles();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [expand, setExpand] = useState(false);

  const handleUpdateQuantity = (getValue: string) => {
    if (verifyPrice(getValue)) {
      setQuantity(Number(nonLeftZero(getValue)));
      setTotal(price * Number(getValue));
    }
  };

  return (
    <View style={theme.horizontalSpacing}>
      <TouchableOpacity
        onPress={() => setExpand(!expand)}
        activeOpacity={1}
        style={[loadStyles.card, boxStyle]}
      >
        <Text style={loadStyles.name}>{name}</Text>
        <Text style={loadStyles.description}>{description}</Text>
        <Text style={loadStyles.price}>{formatPrice(price)}</Text>
        {expand && (
          <View style={loadStyles.card2}>
            <View style={{ flex: 1 }}>
              <View style={loadStyles.action}>
                <Text style={loadStyles.label}>Quantity:</Text>
                <InputNumber
                  onChangeText={handleUpdateQuantity}
                  value={String(quantity)}
                  styles={loadStyles.input}
                />
              </View>
              <View style={loadStyles.action}>
                <Text style={loadStyles.label}>Total:</Text>
                <Text style={loadStyles.labelTotal}>{formatPrice(total)}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={loadStyles.button}
              onPress={() => console.warn(`Added ${key}`)}
            >
              <Text style={loadStyles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
