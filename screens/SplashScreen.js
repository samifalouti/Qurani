import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LogoIcon from "../components/LogoIcon";
import { FontFamily, Color, Border } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.splash}>
        <LogoIcon />
        <Text style={styles.text}>الْقُرْآنِ الْكَرِيمِ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    letterSpacing: -1.4,
    fontWeight: "700",
    fontFamily: FontFamily.kFGQPCHAFSUthmanicScript,
    color: Color.greyGrey2,
    textAlign: "center",
    marginTop: 6,
    alignSelf: "stretch",
  },
  splash: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  splashScreen: {
    borderRadius: Border.br_xs,
    backgroundColor: "#fffff9",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: 103,
    paddingVertical: 210,
  },
});

export default SplashScreen;
