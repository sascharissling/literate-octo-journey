import styled from "styled-components";

export const FooterBar = styled.footer`
  background: ${props => props.theme.background};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 65px;
`;

export const AddButton = styled.button`
  all: unset;
  img {
    cursor: pointer;
    &:active {
      zoom: 0.99;
    }
  }
`;

export const TodoHandling = styled.button`
  all: unset;
  text-align: center;
  font-size: 14px;
`;

export const TodoInput = styled.input`
  height: 41px;
  width: 85vw;
  background: ${props => props.theme.primary};
  border: none;
  border-radius: 15px;
  font-size: 14px;
  padding: 20px;
  &::placeholder {
    text-align: center;
    color: ${props => props.theme.secondary};
  }
  &:focus {
    outline: none;
    background: ${props => props.theme.secondary};
    color: black;
  }
`;

export const BackButton = styled.button`
  all: unset;
  img {
    cursor: pointer;
    &:active {
      zoom: 0.99;
    }
  }
`;
