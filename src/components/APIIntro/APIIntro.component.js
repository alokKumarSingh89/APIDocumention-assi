import React, { memo, useEffect, useState } from "react";
import { loadIntro } from "../../API";
import { Pannel, Heading } from "../../styledComponent";

const APIIntroComponent = ({ id }) => {
  const [result, setResult] = useState({});

  useEffect(async () => {
    const res = await loadIntro(id);

    setResult(res.data);
  }, []);
  console.log(result);
  return (
    <>
      <Heading>Intro API</Heading>
      <Pannel>
        <Pannel.Header>{result.title}</Pannel.Header>
        <Pannel.Section>{result.description}</Pannel.Section>
      </Pannel>
    </>
  );
};

export default memo(APIIntroComponent);
