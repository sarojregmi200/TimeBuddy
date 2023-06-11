import { Dimensions, Image } from "react-native";
import React, { useContext } from "react";

import { datalayer } from "../../configurations/Context.js";

const DeleteBtn = () => {
  const circleSize = 150;
  const {
    listItem: [isHold],
  } = useContext(datalayer);
  return (
    <>
      {isHold.state && (
        <Image
          source={require("../../assets/deletebtn.png")}
          style={{
            width: circleSize,
            top: Dimensions.get("screen").height - 270,
            left: Dimensions.get("screen").width / 2 - circleSize / 2,
            position: "absolute",
            zIndex: 9,
          }}
        />
      )}
    </>
  );
};

export default DeleteBtn;
