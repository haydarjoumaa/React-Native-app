import { StyleSheet, Text, View } from "react-native";

interface IBorderContianerProps {
  title: String;
  color: string;
}

export const BorderContainer = (props: IBorderContianerProps) => {
  const defaultStyle = {
    borderColor: props.color,
    borderWidth: 2,
    padding: 16,
    color: props.color,
  };
  return (
    <View style={defaultStyle}>
      <Text style={{ color: props.color, fontWeight: "bold" }}>
        {props.title}
      </Text>
    </View>
  );
};
