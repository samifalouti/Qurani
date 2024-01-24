import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const QuranSection = ({ quranDua, frameViewWidth, frameViewAlignSelf }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("alignSelf", frameViewAlignSelf),
    };
  }, [frameViewWidth, frameViewAlignSelf]);

  return (
    <View style={[styles.douaaAlKhatmPageInner, frameViewStyle]}>
      <View style={styles.frameWrapper}>
        <View style={styles.parent}>
          <Text style={styles.text}>{quranDua}</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/vector-117.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.diodrumArabicMedium,
    color: Color.colorDarkslategray_300,
    textAlign: "right",
  },
  frameChild: {
    width: 9,
    height: 18,
    marginLeft: 10,
  },
  parent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    width: 163,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  douaaAlKhatmPageInner: {
    backgroundColor: Color.colorKhaki_200,
    width: 360,
    height: 49,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
});

export default QuranSection;
