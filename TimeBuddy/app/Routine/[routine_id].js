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
    popup: [, setPopup],
  } = useContext(datalayer);

  // holds the current routine that matches with the id in the url
  const [currentRoutine, setCurrentRoutine] = useState({});

  // gets updated after the tasks are parsed or anyother sideffects
  const [tasks, setTasks] = useState([]);
  // component did mount
  useEffect(() => {
    if (routineInfo && routineInfo?.length > 0)
      return setCurrentRoutine(() => {
        // filtering the routine and returning the first item since filter returns an array
        return routineInfo?.filter((e) => e.r_id === routine_id)[0];
      });
  }, []);

  // side effect of the routine info
  // to help delete the task
  // since the routine info consists the tasks and it is done to insure that whenever the task is deleted the routine info is also deleted. so it means when the routine info changes then the tasks must be rerendered
  useEffect(() => {
    if (routineInfo && routineInfo?.length > 0)
      // setting the tasks of the routine
      setTasks(() =>
        routineInfo?.filter((e) => e.r_id === routine_id)[0]?.tasks
          ? JSON.parse(
              routineInfo?.filter((e) => e.r_id === routine_id)[0].tasks
            )
          : []
      );
    return setCurrentRoutine(() => {
      // filtering the routine and returning the first item since filter returns an array
      return routineInfo?.filter((e) => e.r_id === routine_id)[0];
    });
  }, [routineInfo]);

  const handleAddBtnPress = () => {
    setPopup({
      type: "Task",
      state: true,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{currentRoutine?.name}</Text>
        <Pressable style={styles.addBtn} onPress={handleAddBtnPress}>
          <AddBtn />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.tasksContainer}>
          {tasks.map((task, index) => {
            return (
              <ListItem
                type={"Task"}
                data={task}
                ind={index}
                key={index}
                parentId={routine_id}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default IndividualRoutine;
