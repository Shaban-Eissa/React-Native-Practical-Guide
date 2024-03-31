import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  const imagrUrl =
    "https://cdn3d.iconscout.com/3d/premium/thumb/hey-6237535-5114797.png?f=webp";

  const marginTopDistance = height < 400 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
        {/* <Title>Start a New Game</Title> */}
        <Image source={{ uri: imagrUrl }} style={styles.image} />
        <Card>
          <InstructionText>
            Select a number between 1 and 99 and press "Confirm"
          </InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  numberInput: {
    height: 50,
    width: 300,
    fontSize: 20,
    borderRadius: 10,
    color: Colors.accent500,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "column",
    width: "300",
  },
  buttonContainer: {
    width: 300,
  },
});
