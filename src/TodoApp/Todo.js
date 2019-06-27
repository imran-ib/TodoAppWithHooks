import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import useToggleHook from "../Hooks/useToggleHook";
import TodoEditForm from "./TodoEditForm";

const Todo = props => {
  const [toggleState, toggle] = useToggleHook(false);
  const {
    todo,
    completed,
    id,
    handleDeleteTodo,
    handleEditTodo,
    toggleTodo
  } = props;

  const deleteTodo = id => {
    handleDeleteTodo(id);
  };

  return (
    <ListItem>
      {toggleState ? (
        <TodoEditForm todo={todo} editTodo={handleEditTodo} id={id} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            color="primary"
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : " " }}
          >
            {todo}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={toggle} aria-label="Delete">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteTodo(id)} aria-label="Edit">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
