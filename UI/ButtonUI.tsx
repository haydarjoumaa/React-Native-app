import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IButtonUI {
  label: String;
  onClickHandler: () => void;
}

export const ButtonUI = (props: IButtonUI) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={props.onClickHandler}>
        <Text>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width: 100,
    borderRadius: 20,
  },
});
