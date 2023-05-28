// screens
import HomeScreen from "./screens/HomeScreen.js";

// data wrapper and providers
import Context from "./context/Context.js";

// for using external fonts
import { useFonts } from "expo-font";

export default function App() {
  // loading the fonts from the files
  const [loaded] = useFonts({
    "poppins-r": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-b": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-eb": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-l": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-sb": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-t": require("./assets/fonts/Poppins-Thin.ttf"),
    "poppins-m": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return;
  
  return (
    <Context>
      <HomeScreen></HomeScreen>
    </Context>
  );
}
