import { View, Text, Pressable } from "react-native";
import React from "react";

// to handle the routes
import { useRouter, usePathname } from "expo-router";

// importing the styles
import styles from "./../../styles/components/style.bottomNavigation.js";

// importing svgs
import Home from "../../assets/svgs/Home.svg";
import Profile from "../../assets/svgs/Profile.svg";
import Routine from "../../assets/svgs/Routine.svg";

const BottomNavigation = () => {
  // to handle route change
  const router = useRouter();

  // to handle navigation on press
  const handleNavigation = (navigateTo) => router.push(navigateTo);

  // gets the active route
  const ActivePathname = usePathname();

  // to change the style of the active path
  const getActiveClass = (pathName, consumer) =>
    // @params pathname = current route
    pathName === ActivePathname
      ? consumer === "icon"
        ? "#FF9A62"
        : styles.activeTxt
      : consumer === "icon" && "#AEAEAE";

  return (
    <View style={styles.mainContainer}>
      {/* home */}
      <Pressable
        style={styles.homeContainer}
        onPress={() => {
          handleNavigation("/");
        }}
      >
        {/* home icon */}
        <Home fill={getActiveClass("/", "icon")} />
        <Text style={[styles.navTxt, getActiveClass("/", "txt")]}>Home</Text>
      </Pressable>

      {/* routine */}
      <Pressable
        style={styles.routineContainer}
        onPress={() => {
          handleNavigation("/Routine");
        }}
      >
        {/* routine icon */}
        <Routine stroke={getActiveClass("/Routine", "icon")} />
        <Text style={[styles.navTxt, getActiveClass("/Routine", "txt")]}>
          Routine
        </Text>
      </Pressable>

      {/* profile */}
      <Pressable
        style={styles.profileContainer}
        onPress={() => {
          handleNavigation("/Profile");
        }}
      >
        {/* profile icon */}

        <Profile
          fill={getActiveClass("/Profile", "icon")}
          stroke={getActiveClass("/Profile", "icon")}
        />
        <Text style={[styles.navTxt, getActiveClass("/Profile", "txt")]}>
          Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default BottomNavigation;
