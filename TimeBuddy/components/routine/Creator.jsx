import { View, Text, TextInput } from "react-native";
import React, { useContext } from "react";

// stylesheet
import styles from "../../styles/components/routine/style.creator.js";
//context
import { datalayer } from "../../configurations/Context.js";

// components
import Days from "../../components/routine/Days.jsx";
// used to dispose the popup i mean close the popup
import Disposer from "./Disposer.jsx";
import Button from "../global/Button.jsx";

const Creator = () => {
  // contains popup type and state
  const {
    popup: [popup],
  } = useContext(datalayer);

  const handleCreation = () => {};

  const type = popup.type;
  // type indicates the type of creator
  // either routine creator or task creator.

  const startingDays = [0, 0, 0, 0, 0, 0, 0];
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
                  placeholder="Ex: Morning Routine"
                  style={styles.nameInputBox}
                  placeholderTextColor={"#9F9F9F"}
                />
              </View>

              {/* contains repeat as label if routine and time if task and accordingly */}
              {popup.type === "Routine" ? (
                <View style={styles.repeatContainer}>
                  <Text style={styles.label}>Repeat</Text>
                  <Days data={startingDays} status={true} creation={true} />
                </View>
              ) : (
                <View style={styles.timeContainer}>
                  <Text style={styles.label}>Time</Text>
                  <Text style={styles.selectedTime}>6:30 - 7:30</Text>
                  {/* arrow btn to indicate it is a time picker */}
                </View>
              )}

              {/* action Btn */}

              <Button
                data={{
                  txt: popup.type === "Routine" ? "Add Routine" : "Add Task",
                }}
                style={{ body: styles.btnBody, txt: styles.btnTxt }}
                handleEvent={handleCreation}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Creator;
