import { useState } from "react";

export default function useInput(init) {
  const [value, setValue] = useState(init);

  const onchange = (event) => {
    setValue(event.target.value);
  };

  return [{ value, onchange, setValue }];
}
