import { View, Text } from "react-native";
import React, { useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
import ToggleBtn from "../routine/ToggleBtn.jsx";

const ListItem = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        {/* title */}
        <Text style={[styles.title, !toggleBtn && styles.inactiveTitle]}>
          {data.name}
        </Text>
        {/* days */}
        <Days data={data.days} status={toggleBtn} />
      </View>

      {/* toggle btn */}
      <ToggleBtn controls={[toggleBtn, setToggleBtn]} />
    </View>
  );
};

export default ListItem;
