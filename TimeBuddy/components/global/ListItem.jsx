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

const ListItem = ({ data, ind, type }) => {
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
      setIsHold({ id: data._id, state: true }); // setting hold to true
      // resetting the item offset before 500ms
      Vibration.vibrate(50); // vibrates for 50ms
    }, 500);
  };
  const handleTouchEnd = () => {
    if (type === "Routine" && !isHold.state) {
      Router.push(`Routine/${data._id}`);
    }

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
      setRoutineInfo((routines) => {
        return [...routines.filter((routine) => routine._id !== data._id)];
      });

    // resetting the pan on hold leave
    pan.setOffset({ x: 0, y: 0 });
  };

  return (
    <>
      <Pressable
        onTouchStart={handleTouchBegin}
        onTouchEnd={handleTouchEnd}
        delayLongPress={500}
        style={[isHold.state && isHold.id === data._id && { zIndex: 20 }]}
      >
        <Animated.View
          style={
            isHold.state
              ? isHold.id == data._id
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
                  {data.time}
                </Text>
              )}
            </View>

            {/* toggle btn */}
            <ToggleBtn
              controls={[toggleBtn, setToggleBtn]}
              routineId={data._id}
            />
          </View>
        </Animated.View>
      </Pressable>
    </>
  );
};

export default ListItem;
