import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// router based
import { useLocalSearchParams } from "expo-router";

// context
import { datalayer } from "../../configurations/Context";

// styles
import styles from "../../styles/app/style.individualRoutine.js";
import ListItem from "../../components/global/ListItem";

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

  console.log(currentRoutine.tasks);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.BackBtn}></View>

          <Text style={styles.Title}>{routineInfo.name}</Text>
          <Pressable style={styles.addBtn}></Pressable>
        </View>

        <View style={styles.tasksContainer}>
          {currentRoutine?.tasks?.map((task, index) => {
            console.log(task);
            return (
              <ListItem type={"Task"} data={task} ind={index} key={index} />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default IndividualRoutine;
