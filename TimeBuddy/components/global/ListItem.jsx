import { View, Text } from "react-native";
import React, { useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";

// components
import Days from "../routine/Days.jsx";
const ListItem = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        {/* title */}
        <Text style={styles.title}>{data.name}</Text>
        {/* days */}

        <Days data={data.days} />
      </View>

      {/* toggle btn */}
    </View>
  );
};

export default ListItem;
