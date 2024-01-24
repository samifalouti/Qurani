const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SearchPage from "./screens/SearchPage";
import ChangePagePopup from "./components/ChangePagePopup";
import ShowMenuNewDesign from "./components/ShowMenuNewDesign";
import Logo from "./components/Logo";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import Group2 from "./screens/Group2";
import Group3 from "./screens/Group3";
import Group4 from "./screens/Group4";
import Group5 from "./screens/Group5";
import Vector from "./components/Vector";
import Vector1 from "./components/Vector1";
import PageSearchPopup from "./screens/PageSearchPopup";
import HomeText from "./components/HomeText";
import Text1 from "./components/Text1";
import DouaaAlKhatmPage from "./screens/DouaaAlKhatmPage";
import SplashScreen from "./screens/SplashScreen";
import JuzIndexPage from "./screens/JuzIndexPage";
import SurahIndexPage from "./screens/SurahIndexPage";
import ToastWhenChangeHizbQuarter from "./screens/ToastWhenChangeHizbQuarter";
import BookmarkedPage from "./screens/BookmarkedPage";
import Home from "./screens/Home";
import PopupKeyboardOpened from "./components/PopupKeyboardOpened";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SearchPage"
              component={SearchPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={Group2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group3"
              component={Group3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group4"
              component={Group4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group5"
              component={Group5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PageSearchPopup"
              component={PageSearchPopup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DouaaAlKhatmPage"
              component={DouaaAlKhatmPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JuzIndexPage"
              component={JuzIndexPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SurahIndexPage"
              component={SurahIndexPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToastWhenChangeHizbQuarter"
              component={ToastWhenChangeHizbQuarter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookmarkedPage"
              component={BookmarkedPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
