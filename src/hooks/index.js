import { useState, useEffect } from "react";
import history from "history/browser";
export const History = () => {
  return history;
};
export const useToggle = (intialState = false) => {
  const [toggle, setToggle] = useState(intialState);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, handleToggle];
};
export const useOnline = (initialState = true) => {
  const [isOnline, setOnline] = useState(initialState);
  useEffect(() => {
    setOnline(navigator.isOnline);
  }, [navigator.isOnline]);

  return [
    isOnline,
    setOnline
  ];
};
