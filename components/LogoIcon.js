import * as React from "react";
import { Image, StyleSheet } from "react-native";

const LogoIcon = () => {
  return (
    <Image
      style={styles.logoIcon}
      resizeMode="cover"
      source={require("../assets/logo.png")}
    />
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    borderRadius: 21,
    width: 122,
    height: 122,
    overflow: "hidden",
  },
});

export default LogoIcon;
