import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";

const TodoListItem = props => {
  const { todo, completed, id } = props.todo;
  return (
    <List>
      <Paper>
        <Todo
          todo={todo}
          completed={completed}
          id={id}
          handleDeleteTodo={props.handleDeleteTodo}
          handleEditTodo={props.handleEditTodo}
          toggleTodo={props.toggleTodo}
        />
        <Divider />
      </Paper>
    </List>
  );
};

export default TodoListItem;
