import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
import ToggleBtn from "../routine/ToggleBtn.jsx";

const ListItem = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  return (
    <Pressable style={styles.itemContainer}>
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
    </Pressable>
  );
};

export default ListItem;
