import styled from "styled-components";

export const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  height: 70px;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const NotDone = styled.button`
  margin: 20px;
  border-radius: 50%;
  background: ${props => props.theme.secondary};
  height: 41px;
  width: 41px;
  border: none;
  display: ${props => (props.isDone ? "none" : "block")};
`;

export const Done = styled.img`
  margin: 20px;
  display: ${props => (props.isDone ? "block" : "none")};
`;

export const TodoTitle = styled.div`
  margin: 0px 20px 0px 0px;
  font-size: 18px;
  word-break: break-all;
  display: block;
`;
