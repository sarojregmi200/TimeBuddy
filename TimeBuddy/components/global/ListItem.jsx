import { View, Text } from "react-native";
import React, { useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
import ToggleBtn from "../routine/ToggleBtn.jsx";
const ListItem = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  console.log(toggleBtn);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        {/* title */}
        <Text style={styles.title}>{data.name}</Text>
        {/* days */}

        <Days data={data.days} />
      </View>

      {/* toggle btn */}
      <ToggleBtn controls={[toggleBtn, setToggleBtn]} />
    </View>
  );
};

export default ListItem;
