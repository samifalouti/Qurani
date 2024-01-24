import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.searchWrapper, styles.searchPosition]}>
        <Text style={[styles.search, styles.searchPosition]}>Search</Text>
      </View>
      <Image
        style={styles.groupChild}
        resizeMode="cover"
        source={require("../assets/vector-126.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  search: {
    fontSize: FontSize.size_49xl,
    fontWeight: "500",
    fontFamily: FontFamily.dMMonoMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  searchWrapper: {
    width: 245,
    height: 89,
  },
  groupChild: {
    top: 90,
    left: 7,
    maxHeight: "100%",
    width: 360,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 90,
  },
});

export default Group;
