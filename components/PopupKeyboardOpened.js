import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const PopupKeyboardOpened = () => {
  return (
    <View style={[styles.popupKeyboardOpened, styles.frameParentLayout]}>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo2]}>البقرة</Text>
          <Text style={[styles.text, styles.textTypo2]}>½ الحزب 5</Text>
          <Text style={[styles.text, styles.textTypo2]}>الجزء 3</Text>
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-51.png")}
        />
        <View style={styles.wrapper}>
          <Text style={[styles.text3, styles.textTypo2]}>55</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.parent1Position]}>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={styles.frameContainer}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <View style={styles.frame2}>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={[styles.text4, styles.textTypo2]}>60</Text>
                  <View style={styles.frameItem} />
                </View>
                <Text style={[styles.text5, styles.textTypo2]}>
                  إنتقال إلى الصفحة
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.frame1, styles.frameFlexBox]}>
                <Text style={styles.text6}>معلومات عن الصفحة:</Text>
              </View>
              <View style={[styles.frameParent1, styles.frameFlexBox]}>
                <View style={styles.parentFlexBox}>
                  <View style={[styles.container, styles.parent1FlexBox]}>
                    <Text style={[styles.text7, styles.textTypo1]}>
                      الجزء 3
                    </Text>
                    <Image
                      style={styles.partIcon}
                      resizeMode="cover"
                      source={require("../assets/part.png")}
                    />
                  </View>
                  <View style={[styles.parent1, styles.parent1FlexBox]}>
                    <Text style={[styles.text7, styles.textTypo1]}>
                      الصفحة 60
                    </Text>
                    <Image
                      style={styles.pageIcon}
                      resizeMode="cover"
                      source={require("../assets/page.png")}
                    />
                  </View>
                </View>
                <View style={[styles.parent2, styles.parentFlexBox]}>
                  <Text style={[styles.text9, styles.textTypo1]}>
                    سورة البقرة (مكية, آياتها 286)
                  </Text>
                  <Image
                    style={styles.bookIcon}
                    resizeMode="cover"
                    source={require("../assets/book.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Text style={[styles.text10, styles.textTypo]}>إنتقال</Text>
              </View>
              <Text style={[styles.text11, styles.textTypo]}>إلغاء</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.image1Icon, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    width: 360,
    alignItems: "center",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.diodrumArabicMedium,
  },
  frameChildLayout: {
    width: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  parent1Position: {
    zIndex: 1,
    position: "absolute",
  },
  frameFlexBox1: {
    justifyContent: "center",
    overflow: "hidden",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  groupLayout: {
    borderRadius: Border.br_8xs,
    justifyContent: "center",
  },
  parent1FlexBox: {
    height: 29,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo1: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.diodrumArabicMedium,
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
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
    color: Color.colorDarkkhaki_300,
    fontSize: FontSize.size_sm,
  },
  parent: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild: {
    maxHeight: "100%",
    flex: 1,
  },
  text3: {
    color: Color.colorDarkkhaki_200,
    fontSize: FontSize.size_mini,
  },
  wrapper: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    height: 637,
    zIndex: 0,
    alignItems: "center",
  },
  text4: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  frameItem: {
    backgroundColor: "#707070",
    width: 1,
    height: 18,
  },
  group: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1.5,
    width: 63,
    flexDirection: "row",
    alignItems: "center",
  },
  text5: {
    fontSize: FontSize.size_base,
    marginLeft: 13,
    color: Color.colorBlack,
    flex: 1,
  },
  frame2: {
    width: 206,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    justifyContent: "center",
    overflow: "hidden",
  },
  text6: {
    fontFamily: FontFamily.diodrumArabicSemibold,
    textAlign: "right",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  text7: {
    fontSize: FontSize.size_mini,
  },
  partIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
    opacity: 0.65,
  },
  container: {
    alignSelf: "stretch",
    zIndex: 0,
  },
  pageIcon: {
    width: 22,
    height: 22,
    opacity: 0.65,
    overflow: "hidden",
  },
  parent1: {
    top: 0,
    left: 123,
    width: 89,
    zIndex: 1,
    position: "absolute",
  },
  text9: {
    fontSize: FontSize.size_sm,
  },
  bookIcon: {
    width: 20,
    height: 20,
    marginLeft: 3,
    opacity: 0.65,
  },
  parent2: {
    height: 27,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent1: {
    marginTop: 10,
  },
  frameView: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  text10: {
    color: Color.colorWhitesmoke_100,
    width: 46,
  },
  frame5: {
    backgroundColor: Color.colorDarkslategray_400,
    width: 70,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    paddingVertical: 0,
  },
  text11: {
    color: Color.colorDarkslategray_200,
    width: 36,
    marginLeft: 16,
  },
  frame4: {
    width: 122,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
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
  frame: {
    width: 302,
    alignItems: "center",
  },
  image1Icon: {
    height: 279,
    marginTop: 40,
  },
  frameGroup: {
    bottom: 0,
    left: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  popupKeyboardOpened: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default PopupKeyboardOpened;
