import React, { memo } from "react";
import { navigate } from "@reach/router";

import { NavigatorContainer } from "../../styledComponent";
import routes from "../../config/router";
const baseroute = "/" + routes.ENTRY + routes.API_PATH;
const urlConfig = {
  intro: baseroute + "" + routes.INTRO,
  guide: baseroute + "" + routes.GUIDE,
  reference: baseroute + "" + routes.REFERENCE,
};

const NavigatorComponent = ({ id }) => {
  const naviateUrl = (urlType) => {
    const url = urlConfig[urlType].replace(":id", id);
    navigate(url);
  };
  return (
    <NavigatorContainer>
      <NavigatorContainer.Link border onClick={() => naviateUrl("intro")}>
        Intro
      </NavigatorContainer.Link>
      <NavigatorContainer.Link border onClick={() => naviateUrl("guide")}>
        Developer's Guide
      </NavigatorContainer.Link>
      <NavigatorContainer.Link onClick={() => naviateUrl("reference")}>
        API Reference
      </NavigatorContainer.Link>
    </NavigatorContainer>
  );
};
export default memo(NavigatorComponent);
