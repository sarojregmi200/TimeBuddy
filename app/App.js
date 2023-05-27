import { View } from "react-native";
import Context from "./context/Context.js";
import HomeScreen from "./screens/HomeScreen.js";

export default function App() {
  return (
    <Context>
      <HomeScreen></HomeScreen>
    </Context>
  );
}
