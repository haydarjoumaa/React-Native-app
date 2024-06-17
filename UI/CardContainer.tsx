import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonUI } from "./ButtonUI";

interface ICardContainer {
  children: React.ReactNode;
  title: String;
  resetButtonLabel: String;
  submitButtonLabel: String;
  resetHandler: () => void;
  submitHandler: () => void;
}

export const CardContainer = (props: ICardContainer) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "white" }}>{props.title}</Text>
      {props.children}
      <View style={styles.buttonsContainer}>
        <ButtonUI
          label={props.resetButtonLabel}
          onClickHandler={props.resetHandler}
        />
        <ButtonUI
          label={props.submitButtonLabel}
          onClickHandler={props.submitHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#012C43",
    padding: 16,
    gap: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
