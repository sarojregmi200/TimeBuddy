import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// router based
import { useLocalSearchParams } from "expo-router";

// context
import { datalayer } from "../../configurations/Context";

// styles
import styles from "../../styles/app/style.individualRoutine.js";

//components
import ListItem from "../../components/global/ListItem";

// icons
import AddBtn from "../../assets/svgs/Add.svg";

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
      <View style={styles.topContainer}>
        <Text style={styles.title}>{currentRoutine.name}</Text>
        <Pressable style={styles.addBtn}>
          <AddBtn />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.tasksContainer}>
          {currentRoutine?.tasks?.map((task, index) => {
            return (
              <ListItem type={"Task"} data={task} ind={index} key={index} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default IndividualRoutine;
