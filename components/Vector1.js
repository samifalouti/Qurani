import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector1 = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "dashed",
    borderColor: Color.colorGray_200,
    borderRadius: 0.001,
    borderWidth: 4,
    width: 3095,
    height: 4,
  },
});

export default Vector1;
