import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import QuranSection from "../components/QuranSection";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SurahIndexPage = () => {
  return (
    <View style={styles.surahIndexPage}>
      <QuranSection
        quranDua="فهرس السور"
        frameViewWidth="unset"
        frameViewAlignSelf="stretch"
      />
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.frameSpaceBlock1]}>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <View style={[styles.parent, styles.parentFrameFlexBox]}>
              <Text style={[styles.text, styles.textClr]}>1</Text>
              <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
                <View style={styles.group}>
                  <Text style={[styles.text1, styles.textClr]}>الفاتحة</Text>
                  <Text style={[styles.text2, styles.textTypo1]}>
                    مكية - آياتها 7
                  </Text>
                </View>
                <View style={[styles.frameGroup, styles.iconLayout]}>
                  <View style={styles.wrapper}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/.png")}
                    />
                  </View>
                  <Text style={[styles.text3, styles.textTypo]}>1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame3, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          />
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <View style={[styles.parent, styles.parentFrameFlexBox]}>
              <Text style={[styles.text, styles.textClr]}>2</Text>
              <View style={[styles.frameContainer, styles.parentFrameFlexBox]}>
                <View style={styles.group}>
                  <Text style={[styles.text1, styles.textClr]}>البقرة</Text>
                  <Text style={[styles.text2, styles.textTypo1]}>
                    مدنية - آياتها 286
                  </Text>
                </View>
                <View style={[styles.frameGroup, styles.iconLayout]}>
                  <View style={styles.wrapper}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/1.png")}
                    />
                  </View>
                  <Text style={[styles.text7, styles.textTypo]}>2</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame5, styles.frameSpaceBlock]}>
          <View style={[styles.parent1, styles.parentFrameFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>50</Text>
            <View style={[styles.frameParent2, styles.parentFrameFlexBox]}>
              <View>
                <Text style={[styles.text1, styles.textClr]}>آل عمران</Text>
                <Text style={[styles.text10, styles.textTypo1]}>
                  مدنية - آياتها 200
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.iconLayout]}>
                <View style={styles.wrapper}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/1.png")}
                  />
                </View>
                <Text style={[styles.text7, styles.textTypo]}>3</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock1: {
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  parentFrameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textClr: {
    color: Color.colorDarkslategray_300,
    textAlign: "left",
  },
  textTypo1: {
    opacity: 0.75,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.diodrumArabicRegular,
  },
  iconLayout: {
    height: 50,
    width: 41,
  },
  textTypo: {
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.darkerGrotesqueMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
    textAlign: "left",
  },
  frameSpaceBlock: {
    marginTop: -1,
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.diodrumArabicRegular,
    color: Color.colorDarkslategray_300,
  },
  text1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.kFGQPCHAFSUthmanicScript,
    textAlign: "left",
  },
  text2: {
    textAlign: "left",
  },
  group: {
    alignItems: "flex-end",
  },
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
    flexDirection: "row",
  },
  text3: {
    top: 11,
    left: 17,
  },
  frameGroup: {
    marginLeft: 20,
  },
  frameParent: {
    marginLeft: 184,
  },
  parent: {
    alignSelf: "stretch",
  },
  frame2: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame1: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "flex-end",
    backgroundColor: Color.colorPalegoldenrod_100,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameIcon: {
    width: 124,
    height: 68,
    overflow: "hidden",
  },
  text7: {
    top: 12,
    left: 16,
  },
  frameContainer: {
    marginLeft: 160,
  },
  frame4: {
    marginTop: -57,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame3: {
    paddingVertical: 0,
  },
  text10: {
    textAlign: "right",
  },
  frameParent2: {
    marginLeft: 138,
  },
  parent1: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frame5: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.colorPalegoldenrod_100,
    marginTop: -1,
  },
  frame: {
    width: 360,
    marginTop: 4,
    overflow: "hidden",
  },
  surahIndexPage: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    flex: 1,
    width: "100%",
    paddingBottom: 298,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SurahIndexPage;
