import { BorderContainer } from "@/UI/BorderContainer";
import { CardContainer } from "@/UI/CardContainer";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface ICreateNewNumber {
  onSubmit: (guessNumber: number) => void;
}

export const CreateNewNumber = (props: ICreateNewNumber) => {
  const [numberValue, setNumberValue] = useState<string>();

  const updateText = (e: string) => {
    setNumberValue(e);
  };

  const title = "Guess My Number";
  const whiteColor = "white";

  const CardTitle = "Enter a Number";

  const submitNumber = () => {
    props.onSubmit(Number(numberValue));
  };
  const cancelNumber = () => {
    setNumberValue(undefined);
  };

  return (
    <View style={styles.container}>
      <BorderContainer title={title} color={whiteColor} />
      <CardContainer
        resetHandler={cancelNumber}
        submitHandler={submitNumber}
        title={CardTitle}
      >
        <TextInput
          style={styles.input}
          value={numberValue}
          onChangeText={updateText}
          keyboardType="numeric"
          maxLength={2}
        />
      </CardContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    gap: 50,
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: 35,
    fontSize: 25,
    color: "white",
  },
});
