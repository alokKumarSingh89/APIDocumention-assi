import React, { memo, useEffect, useState } from "react";
import { loadGuide } from "../../API";
import { Pannel, Heading } from "../../styledComponent";

const ReferenceComponent = ({ id }) => {
  const [result, setResult] = useState({});

  useEffect(async () => {
    const res = await loadGuide(id);
    setResult(res.data);
  }, []);
  console.log(result);
  return (
    <>
      <Heading>API Reference</Heading>
      <Pannel>
        <Pannel.Header>{result.title}</Pannel.Header>
        <Pannel.Section>{result.description}</Pannel.Section>
      </Pannel>
    </>
  );
};

export default memo(ReferenceComponent);
