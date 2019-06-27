import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function AppBarComponent() {
  return (
    <AppBar position="static" styles={{ hieght: "64px" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" />
        <Typography variant="h6">Todo App</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default AppBarComponent;
