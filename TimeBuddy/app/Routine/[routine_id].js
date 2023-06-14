import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// router based
import { useLocalSearchParams } from "expo-router";

// context
import { datalayer } from "../../configurations/Context";

// styles
import styles from "../../styles/app/style.individualRoutine.js";

const IndividualRoutine = () => {
  // extract the routine id from the url
  const { routine_id } = useLocalSearchParams();

  // getting all the routines
  const {
    routine: [routineInfo, setRoutineInfo],
  } = useContext(datalayer);

  // holds the current routine that matches with the id in the url
  const [currentRoutine, setCurrentRoutine] = useState({});

  useEffect(() => {
    if (routineInfo && routineInfo?.length > 0)
      return setCurrentRoutine(() => {
        // filtering the routine and returning the first item since filter returns an array
        return routineInfo?.filter((e) => e._id === routine_id)[0];
      });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text>{currentRoutine?.name}</Text>
    </View>
  );
};

export default IndividualRoutine;
