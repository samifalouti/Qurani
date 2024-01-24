import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const ChangePagePopup = () => {
  return (
    <View style={[styles.changePagePopup, styles.frame1SpaceBlock]}>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo2]}>البقرة</Text>
          <Text style={[styles.text, styles.textTypo2]}>½ الحزب 5</Text>
          <Text style={[styles.text, styles.textTypo2]}>الجزء 3</Text>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-51.png")}
        />
        <View style={styles.wrapper}>
          <Text style={styles.text3}>55</Text>
        </View>
      </View>
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.frame1SpaceBlock]}>
          <View style={styles.frame2}>
            <View style={styles.frameGroup}>
              <View style={styles.frame3}>
                <View style={styles.frame4}>
                  <View style={[styles.container, styles.frame8Layout]}>
                    <Text style={[styles.text4, styles.textClr]}>0</Text>
                  </View>
                  <Text style={[styles.text5, styles.textTypo2]}>
                    إنتقال إلى الصفحة
                  </Text>
                </View>
                <View style={styles.frame3}>
                  <Text style={[styles.text6, styles.textTypo1]}>
                    معلومات عن الصفحة:
                  </Text>
                </View>
                <View style={styles.frame6}>
                  <Text style={[styles.text7, styles.textTypo1]}>
                    الرجاء إدخال رقم صفحة ما بين 1 و 604
                  </Text>
                </View>
              </View>
              <View style={[styles.frame7, styles.frameLayout]}>
                <View style={[styles.frame8, styles.frameLayout]}>
                  <Text style={[styles.text8, styles.textTypo]}>إنتقال</Text>
                </View>
                <Text style={[styles.text9, styles.textTypo]}>إلغاء</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1SpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo2: {
    fontFamily: FontFamily.diodrumArabicMedium,
    textAlign: "left",
  },
  frame8Layout: {
    borderRadius: Border.br_8xs,
    justifyContent: "center",
  },
  textClr: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.diodrumArabicMedium,
  },
  textTypo1: {
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  frameLayout: {
    height: 39,
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    height: 39,
    textAlign: "left",
    fontFamily: FontFamily.diodrumArabicMedium,
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkkhaki_300,
    textAlign: "left",
  },
  parent: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    flex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text3: {
    color: Color.colorDarkkhaki_200,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.diodrumArabicMedium,
  },
  wrapper: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    height: 637,
    zIndex: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  text4: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  container: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1.5,
    width: 63,
    alignItems: "center",
  },
  text5: {
    fontSize: FontSize.size_base,
    marginLeft: 13,
    color: Color.colorBlack,
    flex: 1,
    textAlign: "left",
  },
  frame4: {
    width: 206,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  text6: {
    fontFamily: FontFamily.diodrumArabicSemibold,
    color: Color.colorBlack,
  },
  frame3: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text7: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.diodrumArabicMedium,
    alignSelf: "stretch",
  },
  frame6: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text8: {
    color: Color.colorWhitesmoke_100,
    width: 46,
  },
  frame8: {
    backgroundColor: Color.colorDarkslategray_400,
    width: 70,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    paddingVertical: 0,
  },
  text9: {
    color: Color.colorDarkslategray_200,
    width: 36,
    marginLeft: 16,
  },
  frame7: {
    width: 122,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_sm,
    paddingBottom: 14,
    alignSelf: "stretch",
  },
  frame2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    paddingVertical: 150,
    alignSelf: "stretch",
  },
  frame: {
    position: "absolute",
    marginTop: -241.5,
    marginLeft: -151,
    top: "50%",
    left: "50%",
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  changePagePopup: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    width: 360,
    paddingVertical: Padding.p_12xs,
    justifyContent: "center",
  },
});

export default ChangePagePopup;
