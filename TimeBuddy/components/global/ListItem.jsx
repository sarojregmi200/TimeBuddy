import { View, Text } from "react-native";
import React, { useState } from "react";

// stylesheet
import styles from "../../styles/components/style.listItem.js";
const ListItem = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(data.isOn);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        {/* title */}
        <Text style={styles.title}>{data.name}</Text>
        {/* days */}
      </View>

      {/* toggle btn */}
    </View>
  );
};

export default ListItem;
