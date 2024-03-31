import { useContext, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { createUser } from "../util/auth";

import { AuthContext } from "../store/auth-context";


const imageUrl =
  "https://cdn3d.iconscout.com/3d/premium/thumb/finger-print-authentication-5847971-4897777.png?f=webp";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user, please check your input and try again later."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <AuthContent isLogin={false} onAuthenticate={signupHandler} />
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
