import { useEffect, useState } from "react";

const useLocalStorage = (defaultVal, key) => {
  const [value, setValue] = useState(() => {
    const tempValue = window.localStorage.getItem(key);
    return tempValue !== null ? JSON.parse(tempValue) : defaultVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;