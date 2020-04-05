import styled from "styled-components";
export const Header = styled.div`
  background: #5777ea;
  width: 96.5%;
  height: 60px;
  box-shadow: -1px -2px 5px 4px #5777ea;
  display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 24px;
    @media (max-width: 1023px) {
      width: 88%;
    }
}
`;
export const Title = styled.a`
  color: white;
  font-size: 22px;
  cursor: pointer;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  text-transform: uppercase;
`;
