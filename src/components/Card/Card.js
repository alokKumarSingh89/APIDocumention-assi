import React, { memo } from "react";
import { CardContainer, Flex } from "../../styledComponent";
import NavigatorComponent from "../Navigator";

const Card = ({ id, title, description }) => {
  const desc = () => {
    if (description.length > 200) {
      return description.substr(0, 200) + "...";
    }
    return description;
  };
  return (
    <CardContainer>
      <Flex>
        <CardContainer.CardIcon>{title[0]}</CardContainer.CardIcon>
        <CardContainer.CardTitle>{title}</CardContainer.CardTitle>
      </Flex>
      <Flex>
        <CardContainer.Description>{desc()}</CardContainer.Description>
      </Flex>
      <NavigatorComponent id={id} />
    </CardContainer>
  );
};

export default memo(Card);
