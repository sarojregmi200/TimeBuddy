import {
  View,
  Text,
  Pressable,
  Animated,
  PanResponder,
  Vibration,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
import ToggleBtn from "../routine/ToggleBtn.jsx";

const ListItem = ({ data }) => {
  // state that controls the state of the on off button.
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  // state that controls says whether the list is holded or not.
  const [isHold, setIsHold] = useState(false);
  // used to:
  // -- activate the moveable property..
  // -- to show the delete btn
  // -- to change the ui that indicates one item is holded

  // gesture control that control the dragging of the item
  const pan = useRef(new Animated.ValueXY()).current;

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

  let holdTimeOut = "";

  const handleTouchBegin = () => {
    // after the 500 milliseconds of holding the item it is activated as a hold..
    holdTimeOut = setTimeout(() => {
      setIsHold(true);
      Vibration.vibrate(50); // vibrates for 50ms
    }, 500);
  };

  const handleTouchEnd = () => {
    // since timout will convert it to a valid hold even if it is released at 200ms so, it must be cleared on hold
    clearTimeout(holdTimeOut);
    setIsHold(false);

    // resetting the pan on hold leave
    pan.resetAnimation();
  };

  return (
    <Pressable
      onTouchStart={handleTouchBegin}
      onTouchEnd={handleTouchEnd}
      delayLongPress={500}
    >
      <Animated.View
        style={
          isHold && {
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }
        }
        {...panResponder.panHandlers}
      >
        <View style={[styles.itemContainer]}>
          <Pressable style={styles.leftSection}>
            {/* title */}
            <Text style={[styles.title, !toggleBtn && styles.inactiveTitle]}>
              {data.name}
            </Text>
            {/* days */}
            <Days data={data.days} status={toggleBtn} />
          </Pressable>

          {/* toggle btn */}
          <ToggleBtn
            controls={[toggleBtn, setToggleBtn]}
            routineId={data._id}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItem;
