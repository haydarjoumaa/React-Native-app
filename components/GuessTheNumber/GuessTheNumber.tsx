import { BorderContainer } from "@/UI/BorderContainer";
import { CardContainer } from "@/UI/CardContainer";
import { getRandomNumber } from "@/constants";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Item } from "./Item";

export interface IGuessess {
  id: number;
  guessNumber: number;
}

export const GuessTheNumber = (props: { numberToGuess: number }) => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(99);
  const [randomNumber, setRandomNumber] = useState(
    getRandomNumber(minNumber, maxNumber)
  );
  const [guesses, setGuesses] = useState<IGuessess[]>([]);

  useEffect(() => {
    if (randomNumber === props.numberToGuess) {
      console.log("done");
    } else {
      setGuesses((oldValue) => [
        ...oldValue,
        { id: oldValue.length + 1, guessNumber: randomNumber },
      ]);
    }
  }, [randomNumber]);

  const lowerNumberHandler = () => {
    if (props.numberToGuess > randomNumber) console.log("lier");
    else {
      setMaxNumber(randomNumber);
      setRandomNumber(getRandomNumber(minNumber, randomNumber));
    }
  };

  const HighNumberHandler = () => {
    if (props.numberToGuess < randomNumber) console.log("lier");
    else {
      setMinNumber(randomNumber);
      setRandomNumber(getRandomNumber(randomNumber, maxNumber));
    }
  };

  return (
    <View style={styles.container}>
      <BorderContainer color="white" title="Opponent's Guess" />
      <BorderContainer color="yellow" title={`${randomNumber}`} />
      <CardContainer
        title="Higher or lower?"
        resetButtonLabel="-"
        submitButtonLabel="+"
        resetHandler={lowerNumberHandler}
        submitHandler={HighNumberHandler}
      >
        <View></View>
      </CardContainer>
      <FlatList
        data={guesses}
        renderItem={(item) => <Item items={item.item} />}
        keyExtractor={(item: IGuessess) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 20,
  },
});
