import React from "react";
import TodoListItem from "./TodoListItem";
import uuid from "uuid";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoListItem
          key={uuid()}
          todo={todo}
          handleDeleteTodo={props.handleDeleteTodo}
          handleEditTodo={props.handleEditTodo}
          toggleTodo={props.toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
