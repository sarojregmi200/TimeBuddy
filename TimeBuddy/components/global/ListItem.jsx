import {
  View,
  Text,
  Pressable,
  Animated,
  PanResponder,
  Vibration,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
import ToggleBtn from "../routine/ToggleBtn.jsx";

// context
import { datalayer } from "../../configurations/Context.js";

const ListItem = ({ data }) => {
  // state that controls the state of the on off button.
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  const {
    listItem: [isHold, setIsHold],
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
    holdTimeOut = setTimeout(() => {
      setIsHold({ id: data._id, state: true }); // setting hold to true
      // resetting the item offset before 500ms
      pan.setOffset({ x: 0, y: 0 });
      Vibration.vibrate(50); // vibrates for 50ms
    }, 500);
  };
  const handleTouchEnd = () => {
    // resetting the state to false to hide the del btn
    setIsHold({ id: "none", state: false });

    // since timout will convert it to a valid hold even if it is released at 200ms so, it must be cleared on hold
    clearTimeout(holdTimeOut);

    // resetting the pan on hold leave
    pan.setOffset({ x: 0, y: 0 });
  };

  return (
    <Pressable
      onTouchStart={handleTouchBegin}
      onTouchEnd={handleTouchEnd}
      delayLongPress={500}
      style={
        isHold.state && isHold.id === data._id
          ? { zIndex: 20, elevation: 5 }
          : { zIndex: 10 }
      }
    >
      <Animated.View
        style={
          isHold.state && {
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            zIndex: 20,
          }
        }
        ref={animatedViewRef}
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
