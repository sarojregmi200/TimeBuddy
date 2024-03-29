import {
  View,
  Text,
  Pressable,
  Animated,
  PanResponder,
  Vibration,
  Dimensions,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";

// navigation
import { useRouter } from "expo-router";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
import ToggleBtn from "../routine/ToggleBtn.jsx";

// context
import { datalayer } from "../../configurations/Context.js";
import {
  deleteRoutine,
  updateDb,
} from "../../configurations/appwrite.config.js";

const ListItem = ({ data, ind, type, parentId = false }) => {
  // state that controls the state of the on off button.
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  // to change the route and send to task view from routine view on click
  const Router = useRouter();

  const {
    listItem: [isHold, setIsHold],
    routine: [, setRoutineInfo],
  } = useContext(datalayer);
  // used to 🔽:
  // -- activate the moveable property..
  // -- to show the delete btn
  // -- to change the ui that indicates one item is holded

  // gesture control that control the dragging of the item
  let pan = useRef(new Animated.ValueXY()).current;
  let panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;

  // to reset the moved position on rehold
  const animatedViewRef = useRef(null);

  // name of the timeout function to handle it's existance
  let holdTimeOut = "";
  // usage 🔽
  // validates if a touch is long enough to be considered a hold or not..

  const handleTouchBegin = () => {
    // after the 500 milliseconds of holding the item it is activated as a hold..
    pan.setOffset({ x: 0, y: 0 });

    holdTimeOut = setTimeout(() => {
      setIsHold({ id: data.r_id, state: true }); // setting hold to true
      // resetting the item offset before 500ms
      Vibration.vibrate(50); // vibrates for 50ms
    }, 500);
  };

  // deletes the item on drag
  const deleteItem = () => {
    if (type === "Routine") {
      setRoutineInfo((routines) => {
        // removing the routine from the database
        deleteRoutine(
          routines.filter((routine) => routine.r_id === data.r_id)[0]?.$id
        );
        return [...routines.filter((routine) => routine.r_id !== data.r_id)];
      });
    } else {
      setRoutineInfo((routines) => {
        // getting the parent routine
        const parentRoutine = routines.filter(
          (routine) => routine.r_id === parentId
        )[0];
        if (!parentRoutine) return routines;

        // parsing the tasks into array to perform operations
        const tasksArray = JSON.parse(parentRoutine.tasks);
        // updating the task in the parent routine
        // updated routine is the parent routine here
        const updatedRoutine = {
          ...parentRoutine,
          ...{
            // converting the tasks again into string to store in db
            tasks: JSON.stringify([
              ...tasksArray.filter((task) => task.t_id !== data.t_id),
            ]),
          },
        };

        // update the task in the database
        updateDb(updatedRoutine?.$id, updatedRoutine);
        // updatedroutine is the current routine i.e the routine that the tasks belong to and updates refers to their changed state. i.e deleted so, updateRoutine?.$id refers to the deleted task's parent docs id.

        const updatedRoutines = [
          ...routines.filter((routine) => routine.r_id !== parentId),
          { ...updatedRoutine },
        ];

        // return a new routine array
        return [...updatedRoutines];
      });
    }
  };

  const handleTouchEnd = () => {
    // resetting the state to false to hide the del btn
    setIsHold({ id: "none", state: false });

    // since timout will convert it to a valid hold even if it is released at 200ms so, it must be cleared on hold
    clearTimeout(holdTimeOut);

    const { left, top } = pan.getLayout();

    // available are for the list in visible screen is total h - 200 del btn up - ~ 50 topsection height and margin top = 0  , so it is 800-250 i.e 550
    // and the height of each item is 165 / 2 = 82.5 center so first can travel: 550 - 82.5 = 467.5 at best case
    // hence, for the first item to be deleted it should get like 467.5 +- 50 kinda offset or top value
    // and for second one it should be 550 - (165 + 82.5) +- 50 so, here is the formula
    // since, index starts from 0 if Topoffset > (screenHeigh - 250) - ((index * 165) + 82.5 ) during release.
    // the location where delete is valid, from btm.

    if (
      Number.parseInt(JSON.stringify(top)) >
      Dimensions.get("screen").height - 250 - (ind * 165 + 82.5 + 80)
    )
      deleteItem();
    // resetting the pan on hold leave
    pan.setOffset({ x: 0, y: 0 });
  };

  const goToRoutine = () => {
    // if it is not a hold it is a click and then if it is a click then routing to that routine, to show it's tasks
    if (type === "Routine" && !isHold.state) {
      Router.push(`Routine/${data.r_id}`);
    }
  };

  return (
    <Pressable
      onTouchStart={handleTouchBegin}
      onTouchEnd={handleTouchEnd}
      delayLongPress={500}
      style={[
        isHold.state &&
          (isHold.id === data?.t_id || isHold.id === data?.r_id) && {
            zIndex: 20,
          },
      ]}
    >
      <Animated.View
        style={
          isHold.state
            ? isHold.id === data?.t_id || isHold.id === data?.r_id
              ? {
                  position: "absolute",
                  transform: [{ translateX: pan.x }, { translateY: pan.y }],
                  zIndex: 25,
                }
              : {
                  opacity: 0.5,
                }
            : {
                opacity: 1,
              }
        }
        ref={animatedViewRef}
        {...panResponder.panHandlers}
      >
        <View style={[styles.itemContainer]}>
          <Pressable onPress={goToRoutine}>
            <View style={styles.leftSection}>
              {/* title */}
              <Text style={[styles.title, !toggleBtn && styles.inactiveTitle]}>
                {data.name}
              </Text>
              {/* days */}
              {type === "Routine" ? (
                <Days data={data.days} status={toggleBtn} />
              ) : (
                <Text style={[styles.date, !toggleBtn && styles.inactiveTitle]}>
                  {(data?.time?.first || "7:30") +
                    "-" +
                    (data?.time?.second || "8:30 PM")}
                </Text>
              )}
            </View>
          </Pressable>
          {/* toggle btn */}
          <ToggleBtn
            controls={[toggleBtn, setToggleBtn]}
            routineId={data?.r_id || parentId}
            type={type}
            taskId={data?.t_id}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItem;
