import { View, Text, StyleSheet, Image } from "react-native";
import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const imageUrl =
  "https://static.vecteezy.com/system/resources/previews/010/871/818/original/3d-favorite-bookmark-icon-png.png";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.HeaderText}>
          You don't have any favorites yet. Start adding some!
        </Text>
        <Text style={styles.PlacholderText}>
          This is a placeholder for the Favorites screen. You can replace this
          with your own screen.
        </Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 200,
  },
  HeaderText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 60,
  },
  PlacholderText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 30,
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    borderColor: "lightgray",
    borderWidth: 0.5,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 25,
  },
});
