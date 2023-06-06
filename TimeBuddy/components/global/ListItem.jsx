import { View, Text, Pressable, Animated, PanResponder } from "react-native";
import React, { useRef, useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
import ToggleBtn from "../routine/ToggleBtn.jsx";

const ListItem = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
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
        <ToggleBtn controls={[toggleBtn, setToggleBtn]} routineId={data._id} />
      </View>
    </Animated.View>
  );
};

export default ListItem;
