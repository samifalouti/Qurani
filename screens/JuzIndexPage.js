import * as React from "react";
import { StyleSheet, View } from "react-native";
import QuranSection from "../components/QuranSection";
import SectionCard from "../components/SectionCard";
import { Border, Color } from "../GlobalStyles";

const JuzIndexPage = () => {
  return (
    <View style={styles.juzIndexPage}>
      <QuranSection
        quranDua="فهرس الأجزاء"
        frameViewWidth="unset"
        frameViewAlignSelf="stretch"
      />
      <View style={styles.frameParent}>
        <SectionCard partTitle="الجزء 1" partNumber="1" />
        <SectionCard partTitle="الجزء 2" partNumber="22" />
        <SectionCard partTitle="الجزء 3" partNumber="50" />
        <SectionCard partTitle="الجزء 4" partNumber="75" />
        <SectionCard partTitle="الجزء 5" partNumber="89" />
        <SectionCard partTitle="الجزء 6" partNumber="120" />
        <SectionCard partTitle="الجزء 7" partNumber="300" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    alignSelf: "stretch",
  },
  juzIndexPage: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default JuzIndexPage;
