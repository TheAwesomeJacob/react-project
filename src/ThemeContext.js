import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); // mimic useState hook

export default ThemeContext;