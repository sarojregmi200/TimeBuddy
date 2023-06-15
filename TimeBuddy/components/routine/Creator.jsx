import { View, Text, TextInput, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// stylesheet
import styles from "../../styles/components/routine/style.creator.js";
//context
import { datalayer } from "../../configurations/Context.js";

// components
import Days from "../../components/routine/Days.jsx";
// used to dispose the popup i mean close the popup
import Disposer from "./Disposer.jsx";
import Button from "../global/Button.jsx";

// external package
import * as Crypto from "expo-crypto";
import { useSearchParams } from "expo-router";

// icon
import ArrowBtn from "../../assets/svgs/sideArrow.svg";

// external modules
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { updateDB } from "../../configurations/appwrite.config.js";

const Creator = () => {
  // contains popup type and state
  const {
    popup: [popup, setPopup],
    routine: [, setRoutineInfo],
  } = useContext(datalayer);

  const [timePickerVisibility, setTimePickerVisibility] = useState({
    first: false,
    second: false,
  });

  const [creationState, setCreationState] = useState();
  // data model creation state
  // {type: "Routine", data:{
  //   r_id:"routineId",
  //   name:"name",
  //   repeat: [0, 0, 0, 0, 0, 0, 0],
  //   tasks:[],
  // }}

  // {type: "task", data:{
  //     t_id:"taskid"
  //     ,name:"task name",
  //     time: "time in some format"
  //   }}

  // type indicates the type of creator
  // either Routine or Task.
  const type = popup.type;

  // checks the validity of the form i.e the name is not empty for now
  const [valid, setValid] = useState(false);

  // handles the creation of the state and updating the existing data layer state
  const handleCreation = () => {
    if (!valid) return;

    // add the routine
    setRoutineInfo((prevData) => {
      if (type === "Routine") {
        updateDB([...prevData, { ...creationState }]);
        return [
          ...prevData,
          {
            r_id: Crypto.randomUUID(),
            name: creationState?.name,
            days: creationState?.data?.repeat,
            isOn: false,
            tasks: creationState?.data?.tasks,
          },
        ];
      } else {
        // creating a task
        // getting the parent routine
        const { routine_id } = useSearchParams();

        //  getting the parent routine
        const parentRoutine = prevData.filter(
          (routine) => routine.r_id === routine_id
        )[0];
        parentRoutine.tasks.push({
          t_id: Crypto.randomUUID(),
          name: creationState?.name,
          time: creationState?.data?.time,
        });
        return [
          ...prevData.filter((routine) => routine.r_id !== routine_id),
          { ...parentRoutine },
        ];
      }
    });

    // closing the popup
    setPopup({
      type: "none",
      state: false,
    });

    // resetting the creation state
    setCreationState({
      r_id: "",
      type,
      name: "",
      data:
        type === "Routine"
          ? { tasks: [], repeat: [0, 0, 0, 0, 0, 0, 0] }
          : { time: { start: "", end: "" } },
    });
  };

  // set the initial state according to the active popup mode.
  useEffect(() => {
    setCreationState({
      r_id: "",
      type,
      name: "",
      data:
        type === "Routine"
          ? { tasks: [], repeat: [0, 0, 0, 0, 0, 0, 0] }
          : { time: null },
    });
  }, []);

  const handleTimeInput = () => {
    setTimePickerVisibility({
      first: true,
      second: false,
    });
  };
  return (
    <>
      {popup.state && (
        <>
          <Disposer />
          <View
            style={[
              type == "Routine"
                ? styles.routineContainer
                : styles.taskContainer,
              styles.mainContainer,
            ]}
          >
            {/* a small btn to maximize the routine creator */}
            {/* feature for version @0.2 */}
            <View style={styles.maximizer} />

            {/* form contents */}
            <View style={styles.formContents}>
              {/* contains name as label and a input box to get the name */}
              <View style={styles.nameContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  placeholder={
                    popup.type === "Routine"
                      ? "Ex: Morning Routine"
                      : "Ex: Refill the water Bottle"
                  }
                  style={styles.nameInputBox}
                  placeholderTextColor={"#9F9F9F"}
                  onChangeText={(newTxt) => {
                    setValid(newTxt.length > 0);
                    setCreationState((prevState) => ({
                      ...prevState,
                      name: newTxt,
                    }));
                  }}
                />
              </View>

              {/* contains repeat as label if routine and time if task and accordingly */}
              {popup.type === "Routine" ? (
                <View style={styles.repeatContainer}>
                  <Text style={styles.label}>Repeat</Text>
                  <Days
                    data={creationState?.data?.repeat || [0, 0, 0, 0, 0, 0, 0]}
                    setCreation={setCreationState}
                    status={true}
                    creation={true}
                  />
                </View>
              ) : (
                <Pressable
                  style={styles.timeContainer}
                  onPress={handleTimeInput}
                >
                  <View style={styles.timeTxtContainer}>
                    <Text style={styles.label}>Time</Text>
                    <Text style={styles.selectedTime}>
                      {creationState?.data?.time?.first ||
                        "7:30" +
                          " - " +
                          (creationState?.data?.time?.second || "8:30 pm")}
                    </Text>
                  </View>
                  {/* arrow btn to indicate it is a time picker */}
                  <ArrowBtn />
                </Pressable>
              )}

              {/* action Btn */}

              <Button
                data={{
                  txt: popup.type === "Routine" ? "Add Routine" : "Add Task",
                }}
                style={{
                  body: styles.btnBody,
                  txt: styles.btnTxt,
                  visibility: { opacity: valid ? 1 : 0.7 },
                }}
                handleEvent={handleCreation}
              />
            </View>
          </View>
          {/* first time picker  */}
          <DateTimePickerModal
            isVisible={timePickerVisibility?.first}
            mode="time"
            onConfirm={(time) => {
              setCreationState((previousState) => ({
                ...previousState,

                data: {
                  time: {
                    // extract the time hour:minutes am/pm in this format using moment js
                    first:
                      new Date(time).getHours() +
                      ":" +
                      new Date(time).getMinutes() +
                      " " +
                      moment(time).format("A"),
                    second: previousState?.data?.time?.second || "",
                  },
                },
              }));

              setTimePickerVisibility({
                first: false,
                second: true,
              });
            }}
            onCancel={() =>
              setTimePickerVisibility((previousState) => ({
                second: previousState?.second || false,
                first: false,
              }))
            }
          />
          {/* second time picker */}
          <DateTimePickerModal
            isVisible={timePickerVisibility?.second}
            mode="time"
            onConfirm={(time) => {
              setCreationState((previousState) => ({
                ...previousState,
                data: {
                  time: {
                    first: previousState?.data?.time?.first || "",
                    second:
                      new Date(time).getHours() +
                      ":" +
                      new Date(time).getMinutes() +
                      " " +
                      moment(time).format("A"),
                  },
                },
              }));

              setTimePickerVisibility({
                first: false,
                second: false,
              });
            }}
            onCancel={() =>
              setTimePickerVisibility({ first: false, second: false })
            }
          />
        </>
      )}
    </>
  );
};

export default Creator;
