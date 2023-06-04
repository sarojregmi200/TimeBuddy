import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

// to handle the routes
import { useRouter, usePathname } from "expo-router";

// importing the styles
import styles from "./../../styles/style.bottomNavigation.js";

//testing the svg
import svgfile from "../../assets/svgs/home.svg";

const BottomNavigation = () => {
  // to handle route change
  const router = useRouter();

  // to handle navigation on press
  const handleNavigation = (navigateTo) => router.push(navigateTo);

  // gets the active route
  const ActivePathname = usePathname();

  //testing the svg

  console.log(svgfile);

  // to change the style of the active path
  const getActiveClass = (pathName, consumer) =>
    pathName === ActivePathname
      ? consumer === "icon"
        ? styles.activeIcon
        : styles.activeTxt
      : null;

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
        <Text style={[styles.navTxt, getActiveClass("/Routine", "txt")]}>
          routine
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
        <Text style={[styles.navTxt, getActiveClass("/Profile", "txt")]}>
          profile
        </Text>
      </Pressable>
    </View>
  );
};

export default BottomNavigation;
