import { View, Text } from "react-native";
import React, { useContext } from "react";

// stylesheet
import styles from "../../styles/components/routine/style.creator.js";

// used to dispose the popup i mean close the popup
import Disposer from "./Disposer.jsx";
import { datalayer } from "../../configurations/Context.js";

const Creator = () => {
  // contains popup type and state
  const {
    popup: [popup],
  } = useContext(datalayer);

  const type = popup.type;
  // type indicates the type of creator
  // either routine creator or task creator.
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
          ></View>
        </>
      )}
    </>
  );
};

export default Creator;
