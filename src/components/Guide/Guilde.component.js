import React, { memo, useEffect, useState } from "react";
import { loadGuide } from "../../API";
import { Pannel, Heading } from "../../styledComponent";

const GuideComponent = ({ id }) => {
  const [result, setResult] = useState({});

  useEffect(async () => {
    const res = await loadGuide(id);
    setResult(res.data);
  }, []);
  console.log(result);
  return (
    <>
      <Heading>API Guide</Heading>
      <Pannel>
        <Pannel.Header>{result.title}</Pannel.Header>
        <Pannel.Section>{result.description}</Pannel.Section>
      </Pannel>
    </>
  );
};

export default memo(GuideComponent);
