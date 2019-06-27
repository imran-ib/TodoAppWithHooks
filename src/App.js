import React from "react";
import Paper from "@material-ui/core/Paper";
import TodoApp from "./TodoApp/TodoAppMain";
import AppBarComponent from "./AppBar";

const App = () => {
  return (
    <>
      <Paper
        style={{
          padding: "0",
          margin: "0",
          height: "100vh",
          background: "#f4f4f4"
        }}
      >
        <AppBarComponent />
        <TodoApp />
      </Paper>
    </>
  );
};

export default App;
