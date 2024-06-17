import { ImageBackground, StyleSheet } from "react-native";
import Index from "./index";

export default function RootLayout() {
  const backgroundImage = require("@/assets/images/nikita-kozlov-321.jpg");
  return (
    <ImageBackground source={backgroundImage} style={styles.ImageContainer}>
      <Index />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
});
