import { View, Text, Image } from "react-native";
import React, { useContext } from "react";

// style for the homescreen
import styles from "../styles/app/style.home.js";
import Button from "../components/global/Button.jsx";

// context api layer
import { datalayer } from "../configurations/Context.js";

// expo router
import { useRouter } from "expo-router";

const HomeScreen = () => {
  // data from the data layer
  const {
    popup: [, setPopup],
  } = useContext(datalayer);

  // to change the route.
  const router = useRouter();

  const handleAddRoutine = () => {
    router.push("Routine");
    setPopup({ type: "Routine", state: true });
  };
  return (
    <View style={styles.mainContainer}>
      {/* illustration */}
      <Image source={require("../assets/monk.png")} style={styles.monk} />
      {/* text content*/}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Master Your Time</Text>
        <Text style={styles.para}>
          let your buddy remember{"\n"}
          what you have to do.
        </Text>
      </View>
      {/* button */}
      <Button
        data={{ txt: "Create Routine" }}
        style={{ body: styles.buttonBody, txt: styles.buttonTxt }}
        handleEvent={() => handleAddRoutine()}
      />
    </View>
  );
};

export default HomeScreen;
