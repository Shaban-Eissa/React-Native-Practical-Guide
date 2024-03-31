import { useContext, useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { AuthContext } from "../store/auth-context";

import { login } from "../util/auth";

const imageUrl =
  "https://cdn3d.iconscout.com/3d/premium/thumb/login-verified-6251835-5117015.png?f=webp";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  );
}

export default LoginScreen;

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
