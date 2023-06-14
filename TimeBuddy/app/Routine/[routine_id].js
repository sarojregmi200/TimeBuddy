import { View, Text } from "react-native";
import React from "react";

import { useLocalSearchParams, useSegments } from "expo-router";
const IndividualRoutine = () => {
  const { routine_id } = useLocalSearchParams();
  const url = useSegments()[0];

  return (
    <View>
      <Text>
        {routine_id}
        {url}
      </Text>
    </View>
  );
};

export default IndividualRoutine;
