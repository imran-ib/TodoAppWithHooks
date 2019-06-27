import { useState } from "react";

export default initialVale => {
  const [value, setValue] = useState(initialVale);

  const handleChange = e => {
    return setValue(e.target.value);
  };
  const reset = () => {
    return setValue("");
  };
  return [value, handleChange, reset];
};
