import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const HomeText = () => {
  return <Text style={styles.home}>{`Home `}</Text>;
};

const styles = StyleSheet.create({
  home: {
    fontSize: 124,
    fontWeight: "500",
    fontFamily: FontFamily.dMMonoMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default HomeText;
