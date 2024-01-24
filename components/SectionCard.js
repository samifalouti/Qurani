import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const SectionCard = ({ partTitle, partNumber }) => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.wrapper, styles.wrapperPosition]}>
        <Text style={[styles.text, styles.textTypo1]}>{partTitle}</Text>
      </View>
      <View style={[styles.container, styles.wrapper5Layout]}>
        <Text style={[styles.text1, styles.textTypo]}>الحزب 1</Text>
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <Text style={[styles.text2, styles.textTypo1]}>ربع</Text>
      </View>
      <View style={[styles.frameView, styles.frameLayout]}>
        <Text style={[styles.text2, styles.textTypo1]}>ربع</Text>
      </View>
      <View style={[styles.wrapper1, styles.wrapperLayout1]}>
        <Text style={[styles.text2, styles.textTypo1]}>نصف</Text>
      </View>
      <View style={[styles.wrapper2, styles.wrapperLayout1]}>
        <Text style={[styles.text2, styles.textTypo1]}>نصف</Text>
      </View>
      <View style={[styles.wrapper3, styles.wrapperLayout]}>
        <Text style={[styles.text2, styles.textTypo1]}>3 أرباع</Text>
      </View>
      <View style={[styles.wrapper4, styles.wrapperLayout]}>
        <Text style={[styles.text2, styles.textTypo1]}>3 أرباع</Text>
      </View>
      <View style={[styles.wrapper5, styles.wrapper5Layout]}>
        <Text style={[styles.text8, styles.textTypo]}>الحزب 2</Text>
      </View>
      <View style={[styles.wrapper6, styles.wrapperPosition]}>
        <Text style={styles.text9}>{partNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 95,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkkhaki_100,
    borderStyle: "solid",
    position: "absolute",
    top: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo1: {
    textAlign: "right",
    fontFamily: FontFamily.kFGQPCHAFSUthmanicScript,
    fontWeight: "700",
  },
  wrapper5Layout: {
    height: 48,
    width: 79,
    borderWidth: 1,
    left: 195,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.colorDarkkhaki_100,
    borderStyle: "solid",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "right",
    fontFamily: FontFamily.kFGQPCHAFSUthmanicScript,
    fontWeight: "700",
  },
  frameLayout: {
    width: 51,
    left: 145,
    height: 48,
    borderWidth: 1,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.colorDarkkhaki_100,
    borderStyle: "solid",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperLayout1: {
    left: 95,
    width: 51,
    height: 48,
    borderWidth: 1,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.colorDarkkhaki_100,
    borderStyle: "solid",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperLayout: {
    width: 48,
    left: 48,
    height: 48,
    borderWidth: 1,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.colorDarkkhaki_100,
    borderStyle: "solid",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_11xl,
    color: Color.colorDarkslategray_300,
  },
  wrapper: {
    left: 273,
    width: 88,
    zIndex: 0,
  },
  text1: {
    color: Color.colorDarkolivegreen,
  },
  container: {
    zIndex: 1,
    top: 0,
  },
  text2: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_100,
  },
  frame: {
    zIndex: 2,
    top: 47,
  },
  frameView: {
    zIndex: 3,
    top: 0,
  },
  wrapper1: {
    zIndex: 4,
    top: 47,
  },
  wrapper2: {
    zIndex: 5,
    top: 0,
  },
  wrapper3: {
    zIndex: 6,
    top: 47,
  },
  wrapper4: {
    zIndex: 7,
    top: 0,
  },
  text8: {
    color: Color.colorDarkslategray_300,
  },
  wrapper5: {
    zIndex: 8,
    top: 47,
  },
  text9: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.diodrumArabicRegular,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
  },
  wrapper6: {
    left: 0,
    width: 49,
    zIndex: 9,
  },
  frameParent: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SectionCard;
