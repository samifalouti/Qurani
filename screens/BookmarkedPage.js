import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const BookmarkedPage = () => {
  return (
    <View style={[styles.bookmarkedPage, styles.frameChildLayout]}>
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
      <View style={styles.bookmarkedPageInner}>
        <View style={styles.group}>
          <Text style={[styles.text4, styles.text4Position]}>تم الحفظ</Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/vector-120.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.text4Position]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
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
    fontFamily: FontFamily.diodrumArabicMedium,
    textAlign: "left",
  },
  text4Position: {
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkkhaki_300,
    textAlign: "left",
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  text3: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkkhaki_200,
    textAlign: "left",
  },
  wrapper: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    width: 360,
    zIndex: 0,
    alignItems: "center",
    flex: 1,
  },
  text4: {
    left: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.diodrumArabicSemibold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  groupChild: {
    top: 10,
    left: 72,
    width: 18,
    height: 11,
    position: "absolute",
  },
  group: {
    top: -300,
    left: -108,
    width: 90,
    height: 32,
    position: "absolute",
  },
  bookmarkedPageInner: {
    top: 304,
    left: 121,
    width: 116,
    height: 40,
    zIndex: 1,
    position: "absolute",
  },
  vectorIcon: {
    left: 62,
    width: 33,
    height: 68,
    zIndex: 2,
  },
  bookmarkedPage: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    height: 640,
  },
});

export default BookmarkedPage;
