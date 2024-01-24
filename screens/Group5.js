import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group5 = () => {
  return (
    <View style={styles.juzIndexParent}>
      <Text style={styles.juzIndex}>Juz Index</Text>
      <Image
        style={styles.groupChild}
        resizeMode="cover"
        source={require("../assets/vector-126.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  juzIndex: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_49xl,
    fontWeight: "500",
    fontFamily: FontFamily.dMMonoMedium,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 90,
    left: 7,
    maxHeight: "100%",
    width: 360,
    position: "absolute",
  },
  juzIndexParent: {
    flex: 1,
    width: "100%",
    height: 90,
  },
});

export default Group5;
