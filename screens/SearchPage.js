import * as React from "react";
import { StyleSheet, View } from "react-native";
import FormContainer from "../components/FormContainer";
import { Border, Color } from "../GlobalStyles";

const SearchPage = () => {
  return (
    <View style={styles.searchPage}>
      <FormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  searchPage: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightyellow,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default SearchPage;
