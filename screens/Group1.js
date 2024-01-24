import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group1 = () => {
  return (
    <View style={styles.douaaPageParent}>
      <Text style={styles.douaaPage}>Douaa page</Text>
      <Image
        style={styles.groupChild}
        resizeMode="cover"
        source={require("../assets/vector-126.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  douaaPage: {
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
  douaaPageParent: {
    flex: 1,
    width: "100%",
    height: 90,
  },
});

export default Group1;
