import { Stack } from "expo-router";

export default layout = () => {
  return (
    <Stack
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    />
  );
};
