import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Text1 = () => {
  return <Text style={styles.text}>{` `}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: FontFamily.diodrumArabicMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Text1;
