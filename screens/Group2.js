import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Group2 = () => {
  return (
    <View style={styles.surahIndexParent}>
      <Text style={styles.surahIndex}>Surah Index</Text>
      <Image
        style={styles.groupChild}
        resizeMode="cover"
        source={require("../assets/vector-126.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  surahIndex: {
    top: 0,
    left: 0,
    fontSize: 60,
    fontWeight: "500",
    fontFamily: FontFamily.dMMonoMedium,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 86,
    left: 7,
    maxHeight: "100%",
    width: 360,
    position: "absolute",
  },
  surahIndexParent: {
    flex: 1,
    width: "100%",
    height: 86,
  },
});

export default Group2;
