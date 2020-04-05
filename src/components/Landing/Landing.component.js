import React, { memo, useEffect, useState, Suspense } from "react";
import { Wrapper, Heading, Subheading, Flex } from "../../styledComponent";
import { loadAPI } from "../../API";
import Card from "../Card";
import LoadingBar from "../LoadingBar";

const LandingComponent = () => {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const loadMoreData = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (count < page * 10) {
      setPage((pre) => {
        loadData({ page: pre + 1 });
        return pre + 1;
      });
    }
  };
  const loadData = async ({ page, limit = 10 } = {}) => {
    try {
      setLoading(true);

      const { data } = await loadAPI(page, limit);
      if (page === 1) {
        setCount(data.count);
      }
      setResult((pre) => {
        console.log(pre);
        return [...pre, ...data.document];
      });
    } catch (e) {
      console.log(e);
      alert("No Record Found");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
    window.addEventListener("scroll", loadMoreData);
    return () => window.removeEventListener("scroll", loadMoreData);
  }, []);
  return (
    <Wrapper>
      <Heading>APIs & Service</Heading>
      <Subheading>Get Information About API</Subheading>
      <Flex margin="20px 0 0 0">
        <Suspense fallback={<h1>Loading</h1>}>
          {result.map((card) => {
            return <Card key={card.id} {...card}></Card>;
          })}
        </Suspense>
      </Flex>
      {loading && <LoadingBar />}
    </Wrapper>
  );
};
export default memo(LandingComponent);
