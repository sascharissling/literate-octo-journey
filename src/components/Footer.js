import React from "react";
import addIcon from "./icons/addIcon.svg";
import backIcon from "./icons/backIcon.svg";
import {
  FooterBar,
  AddButton,
  TodoHandling,
  TodoInput,
  BackButton
} from "./FooterComponents.js";

export default function Footer({
  handleRefresh,
  handleClear,
  handleInputSubmit,
  inputValue,
  handleInput
}) {
  const [inputIsShown, setInputIsShown] = React.useState(false);
  return (
    <FooterBar>
      {inputIsShown && (
        <>
          <BackButton onClick={() => setInputIsShown(false)}>
            <img src={backIcon} alt={"back"} />
          </BackButton>
          <form onSubmit={handleInputSubmit}>
            <TodoInput
              data-test-id="todo-input"
              placeholder={"Add task..."}
              value={inputValue}
              onChange={handleInput}
            />
          </form>
        </>
      )}
      {!inputIsShown && (
        <>
          <TodoHandling onClick={handleRefresh}>Refresh</TodoHandling>
          <AddButton
            data-test-id="add-button"
            onClick={() => setInputIsShown(true)}
          >
            <img src={addIcon} alt={"add todo"} />
          </AddButton>
          <TodoHandling onClick={handleClear}>Clear</TodoHandling>
        </>
      )}
    </FooterBar>
  );
}
