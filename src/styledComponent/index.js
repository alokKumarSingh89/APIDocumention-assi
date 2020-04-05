import styled from "styled-components";
export const AppContainer = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div``;
export const Heading = styled.h1`
  color: #6f6e6ee8;
  margin-top: 20px;
  padding: 0 10px;
  text-shadow: 7px 8px 6px #ccc;
`;
export const Subheading = styled.h3`
  color: #888686e8;
  font-size: 15px;
  margin: 0;
  padding: 0 12px;
`;
export const Flex = styled(AppContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.hAlign || "flex-start"};
  margin: ${(props) => props.margin || "0"};
`;

const CardIcon = styled.span`
  width: 30px;
  color: white;
  background: #5777ea;
  font-size: 16px;
  font-weight: 900;
  line-height: 28px;
  border-radius: 50%;
  padding: 0;
  text-transform: uppercase;
  text-align: center;
  margin-right: 20px;
  height: 28px;
`;
const CardTitle = styled.h4`
  margin: 0;
  width: 70%;
  text-align: left;
  color: #777676;
  font-size: 20px;
`;
export const CardContainer = styled.div`
  width: 30%;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  margin-left: 10px;
  box-shadow: 1px 1px 0px 0px #ece9e9;
  transition: transform 2s;
  &:hover {
    box-shadow: 9px 6px 8px 4px #c7c4c4c9;
    transform: scale(1.02);
  }
  @media (max-width: 1024px) {
    width: 46%;
  }
  @media (max-width: 1023px) {
    width: 88%;
  }
`;

CardContainer.CardIcon = CardIcon;
CardContainer.CardTitle = CardTitle;
CardContainer.Description = styled.p`
  padding: 10px;
  color: #615f5f;
`;

export const NavigatorContainer = styled(AppContainer)`
  margin-top: 10px;
`;
NavigatorContainer.Link = styled.div`
  color: #696565;
  font-size: 20px;
  line-height: 20px;
  padding: 8px;
  font-weight: 400;
  cursor: pointer;
  width: 95%;
  border-bottom: ${(props) => props.border && "1px solid #bdb6b6"};
  &:after {
    content: ">";
    float: right;
    font-size: 21px;
    font-weight: 400;
  }
`;

export const Pannel = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
`;
Pannel.Header = styled.div`
  color: white;
  font-size: 23px;
  padding: 24px;
  border-radius: 3px;
  background-image: linear-gradient(to bottom right, #5777eae3, #57eab4e3);
  text-shadow: 7px 9px 6px #5777eae3;
`;
Pannel.Section = styled.p`
  padding: 24px;
  font-size: 20px;
  color: #757272;
  line-height: 20px;
  font-weight: 300;
`;
