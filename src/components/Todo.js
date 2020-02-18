import React from "react";
import checkMark from "./icons/checkMark.svg";
import {
  TodoWrapper,
  CheckBox,
  NotDone,
  Done,
  TodoTitle
} from "./TodoComponents.js";

export default function Todo({ handleDone, handleUndone, index, todo }) {
  const [isDone, setIsDone] = React.useState(false);
  return (
    <TodoWrapper>
      <CheckBox>
        <NotDone
          isDone={isDone}
          onClick={() => {
            setIsDone(true);
            handleDone(index);
          }}
        />
        <Done
          isDone={isDone}
          src={checkMark}
          alt={"is done"}
          onClick={() => {
            setIsDone(false);
            handleUndone(index);
          }}
        />
      </CheckBox>
      <TodoTitle>{todo}</TodoTitle>
    </TodoWrapper>
  );
}
