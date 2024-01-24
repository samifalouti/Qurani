import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/search1.png")}
      />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.frame2}>
          <Text style={styles.text}>إبحث عن آية</Text>
        </View>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    paddingVertical: 0,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  searchIcon: {
    width: 36,
    height: 36,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.diodrumArabicMedium,
    color: Color.colorOlive,
    textAlign: "left",
    width: 90,
    height: 27,
    opacity: 0.5,
  },
  frame2: {
    width: 118,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frameIcon: {
    width: 17,
    height: 25,
    marginLeft: -6,
    overflow: "hidden",
  },
  frame1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorKhaki_100,
    borderStyle: "solid",
    borderColor: Color.colorPalegoldenrod_200,
    borderWidth: 1.5,
    width: 272,
    height: 40,
    paddingHorizontal: Padding.p_3xs,
    marginLeft: 20,
  },
  frame: {
    backgroundColor: Color.colorKhaki_200,
    width: 360,
    height: 64,
    paddingHorizontal: Padding.p_xl,
  },
});

export default FormContainer;
