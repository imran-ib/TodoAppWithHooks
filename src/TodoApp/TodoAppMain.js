import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import uuid from "uuid";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
  const initialtodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  // const initialtodos = [
  //   { id: uuid(), todo: "Buy Eggs", completed: true },
  //   { id: uuid(), todo: "Buy Milk", completed: true },
  //   { id: uuid(), todo: "Buy sugar", completed: false }
  // ];
  const [todos, setTodos] = useState(initialtodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const AddTodoHandler = value => {
    setTodos([...todos, { id: uuid(), todo: value, completed: false }]);
  };
  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  const toggleTodo = id => {
    const toggledTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(toggledTodos);
  };
  const handleEditTodo = (id, task) => {
    const toggledTodos = todos.map(todo =>
      todo.id === id ? { ...todo, todo: task } : todo
    );
    setTodos(toggledTodos);
  };
  return (
    <Grid container justify="center">
      <Grid item xs={11} md={8} lg={4}>
        <TodoForm addTodo={AddTodoHandler} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          toggleTodo={toggleTodo}
        />
      </Grid>
    </Grid>
  );
}

export default TodoApp;
