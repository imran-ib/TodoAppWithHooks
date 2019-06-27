import { useState } from "react";

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState(false);

  function toggle(e) {
    setToggleState(!toggleState);
  }

  return [toggleState, toggle];
}
