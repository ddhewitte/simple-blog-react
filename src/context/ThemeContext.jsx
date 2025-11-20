import { useContext } from "react";
import { createContext } from "react";

//1. create context
export const ThemeContext = createContext();

//2. create provider -> call 1
export const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider value="light">
            {children}
        </ThemeContext.Provider>
    )
}

//3. custom hooks to call with useContext once
export const useTheme = () => {
    return useContext(ThemeContext);
}

export default ThemeProvider;