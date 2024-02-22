import { createContext, useReducer } from "react";
const ThemeContex = createContext();

const initialData = { theme: localStorage.getItem ("myTheme") === null ? "Light" : localStorage.getItem ("myTheme") === "Light" ? "Light" : "Dark"};

const reducer = (firstState, action) => {
  switch (action.type) {
    case "Theme":
      return { ...firstState, theme: action.newValue };
    default:
      return firstState;
  }}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeTheme = (th) => {
    localStorage.setItem("myTheme" , th)
    dispatch({ type: "Theme", newValue: th });
  };

  return (
     <ThemeContex.Provider value={{ ...firstState, changeTheme}}>
      {children}
     </ThemeContex.Provider>
  );
}

export default ThemeContex;