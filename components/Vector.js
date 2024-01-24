import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "dashed",
    borderColor: Color.colorGray_200,
    borderRadius: 0.001,
    borderWidth: 4,
    width: 895,
    height: 4,
    transform: [
      {
        rotate: "0.06deg",
      },
    ],
  },
});

export default Vector;
