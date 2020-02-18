import React from "react";
import Footer from "../src/components/Footer";
import GlobalStyles from "./GlobalStyles";
import Header from "../src/components/Header";
import TodoList from "./components/TodoList";
import defaultTheme from "./utils/defaultTheme";
import { AppContainer } from "./AppComponents.js";
import { ThemeProvider } from "styled-components";

function App() {
  const [todolist, setTodolist] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const todo = inputValue;
  const done = false;

  async function getTodos() {
    const data = await fetch("http://localhost:3004/todos");
    const items = await data.json();
    console.log(items);
    setTodolist(items);
  }

  React.useEffect(() => {
    getTodos();
  }, []);

  function handleRefresh() {
    window.location.reload();
  }

  function handleClear() {
    const newToDos = [...todolist];
    const doneTodos = newToDos.filter(function(todo) {
      return todo.done !== true;
    });
    setTodolist(doneTodos);
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  async function handleInputSubmit(event) {
    event.preventDefault();
    if (!inputValue) return;
    await fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo, done })
    });
    setInputValue("");
    getTodos();
  }

  function handleDone(index) {
    const newToDos = [...todolist];
    newToDos[index].done = true;
    setTodolist(newToDos);
  }

  function handleUndone(index) {
    const newToDos = [...todolist];
    newToDos[index].done = false;
    setTodolist(newToDos);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <TodoList
          handleDone={handleDone}
          handleUndone={handleUndone}
          todolist={todolist}
        />
        <Footer
          handleRefresh={handleRefresh}
          handleClear={handleClear}
          handleInput={handleInput}
          inputValue={inputValue}
          handleInputSubmit={handleInputSubmit}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
