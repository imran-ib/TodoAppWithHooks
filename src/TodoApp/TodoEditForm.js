import React from "react";
import TextField from "@material-ui/core/TextField";
import useHandleChangeHook from "../Hooks/useHandleChangeHook";

const TodoEditForm = props => {
  const { todo, editTodo, id } = props;
  const [value, handleChange, reset] = useHandleChangeHook(todo);

  const handleSubmit = e => {
    e.preventDefault();
    reset();
    editTodo(id, value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Todo Task"
          placeholder="Placeholder"
          helperText="Edit Task and press Enter"
          fullWidth
          autoFocus
          margin="normal"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoEditForm;
