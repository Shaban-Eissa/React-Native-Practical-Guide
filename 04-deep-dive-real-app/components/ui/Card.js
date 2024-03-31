import { View, StyleSheet, Dimensions } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 400 ? 15 : 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 10,
  },
});
