import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const PageSearchPopup = () => {
  return <Text style={styles.pageSearchPopup}>Page search popup</Text>;
};

const styles = StyleSheet.create({
  pageSearchPopup: {
    fontSize: 74,
    fontWeight: "500",
    fontFamily: FontFamily.dMMonoMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default PageSearchPopup;
