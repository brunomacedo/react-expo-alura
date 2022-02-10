import {
  Button,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import type { IServices } from "../../mocks/services";
import { theme } from "../../theme/global";
import { InputNumber } from "../InputNumber";
import { styles } from "./styles";

export default function Card({
  item: { key, name, price, description },
  boxStyle,
}: {
  item: IServices;
  boxStyle?: StyleProp<TextStyle>;
}) {
  const loadStyles = styles();

  return (
    <View style={theme.horizontalSpacing}>
      <View style={[loadStyles.card, boxStyle]}>
        <Text style={loadStyles.name}>{name}</Text>
        <Text style={loadStyles.description}>{description}</Text>
        <Text style={loadStyles.price}>{price}</Text>
        <View style={loadStyles.card2}>
          <View style={{ flex: 1 }}>
            <View style={loadStyles.action}>
              <Text style={loadStyles.label}>Quantity:</Text>
              <InputNumber styles={loadStyles.input} />
            </View>
            <View style={loadStyles.action}>
              <Text style={loadStyles.label}>Total:</Text>
              <InputNumber styles={loadStyles.input} />
            </View>
          </View>
          <TouchableOpacity
            style={loadStyles.button}
            onPress={() => console.warn(`Added ${key}`)}
          >
            <Text style={loadStyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
