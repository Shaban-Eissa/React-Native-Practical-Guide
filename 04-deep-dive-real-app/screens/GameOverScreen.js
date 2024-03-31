import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 200;
  }

  if (height < 400) {
    imageSize = 200;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  const imageUrl =
    "https://static.vecteezy.com/system/resources/previews/010/916/007/non_2x/download-data-to-cloud-computer-with-3d-mobile-phone-in-hand-or-3d-mobile-phone-and-data-download-free-png.png";
  return (
    <View style={styles.rootContainer}>
      {/* <Title>GAME OVER!</Title> */}
      <View style={[styles.imageContainer, imageStyle]}>
        {/* <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        /> */}
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 400 ? 250 : 300,
    // height: deviceWidth < 400 ? 250 : 300,
    // borderRadius: 150,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
