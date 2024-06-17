import { Text, View } from "react-native";
import { IGuessess } from "./GuessTheNumber";

export const Item = (props: { items: IGuessess }) => {
  return (
    <View>
      <Text>{props.items.guessNumber}</Text>
    </View>
  );
};
