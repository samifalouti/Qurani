import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Logo = () => {
  return (
    <View style={[styles.logo, styles.logoLayout]}>
      <LinearGradient
        style={[styles.logoChild, styles.logoLayout]}
        locations={[0, 1]}
        colors={["#dcb428", "#633002"]}
        useAngle={true}
        angle={203.05}
      />
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoLayout: {
    height: 512,
    width: 512,
  },
  logoChild: {
    top: 0,
    left: 0,
    borderRadius: 271,
    backgroundColor: "transparent",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 63,
    left: 55,
    width: 402,
    height: 386,
    position: "absolute",
  },
  logo: {
    overflow: "hidden",
  },
});

export default Logo;
