import { CreateNewNumber } from "@/components/createNewNumber/CreateNewNumber";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [numberToGuess, setNumberToGuess] = useState<number>();

  const getNumber = (num: number) => {
    setNumberToGuess(num);
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {!numberToGuess && <CreateNewNumber onSubmit={getNumber} />}
    </View>
  );
}
