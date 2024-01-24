import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={[styles.home, styles.homeLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>البقرة</Text>
          <Text style={[styles.text, styles.textTypo]}>½ الحزب 5</Text>
          <Text style={[styles.text, styles.textTypo]}>الجزء 3</Text>
        </View>
        <Image
          style={[styles.frameChild, styles.homeLayout]}
          resizeMode="cover"
          source={require("../assets/frame-51.png")}
        />
        <View style={styles.wrapper}>
          <Text style={[styles.text3, styles.textTypo]}>55</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.diodrumArabicMedium,
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkkhaki_300,
  },
  parent: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  text3: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkkhaki_200,
  },
  wrapper: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    height: 637,
    alignItems: "center",
    flex: 1,
  },
  home: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    flexDirection: "row",
  },
});

export default Home;
