import styled from "styled-components";

export const HeaderBar = styled.header`
  width: 100vw;
  height: 65px;
  display: flex;
  background: ${props => props.theme.background};
  justify-content: center;
  align-items: center;
  span {
    font-size: 14;
  }
`;

export const AppTitle = styled.div`
  display: flex;
  align-items: baseline;
`;
