import React from "react";
import TextField from "@material-ui/core/TextField";
import useHandleChangeHook from "../Hooks/useHandleChangeHook";

const TodoForm = props => {
  const { addTodo } = props;
  const [value, handleChange, reset] = useHandleChangeHook("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Todo Task"
          placeholder="Placeholder"
          helperText="Add Task and press Enter"
          fullWidth
          margin="normal"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoForm;
