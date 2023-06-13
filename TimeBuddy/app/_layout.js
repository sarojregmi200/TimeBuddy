import { SplashScreen, Stack } from "expo-router";

// importing fonts and font loader for custom fonts
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

// data layer wrapper
import Context from "../configurations/Context.js";

// components
import BottomNavigation from "../components/global/BottomNavigation.jsx";
import Creator from "../components/routine/Creator.jsx";
import DeleteBtn from "../components/routine/DeleteBtn.jsx";

export default layout = () => {
  // for loading the fonts
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  // to show the splash screen until the font is loaded
  if (!fontLoaded) return <SplashScreen />;

  // returns the navigation stack when the font is loaded
  return (
    <Context>
      <Stack
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      />

      {/* navigation  */}
      <BottomNavigation />

      {/* popups */}
      <Creator />

      <DeleteBtn />
    </Context>
  );
};
