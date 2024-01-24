import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ToastWhenChangeHizbQuarter = () => {
  return (
    <View style={[styles.toastWhenChangeHizbQuarter, styles.frameChildLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>البقرة</Text>
          <Text style={[styles.text, styles.textTypo]}>½ الحزب 5</Text>
          <Text style={[styles.text, styles.textTypo]}>الجزء 3</Text>
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-511.png")}
        />
        <View style={styles.wrapper}>
          <Text style={[styles.text3, styles.textTypo]}>55</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={[styles.text4, styles.textTypo]}>½ الحزب 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
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
    zIndex: 0,
    alignItems: "center",
    height: 640,
    flex: 1,
  },
  text4: {
    top: -295,
    left: -64,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    position: "absolute",
  },
  container: {
    top: 300,
    left: 104,
    width: 151,
    height: 41,
    zIndex: 1,
    position: "absolute",
  },
  toastWhenChangeHizbQuarter: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    flexDirection: "row",
    height: 640,
  },
});

export default ToastWhenChangeHizbQuarter;
