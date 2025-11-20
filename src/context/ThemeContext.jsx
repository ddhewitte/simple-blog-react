import { useContext, useState } from "react";
import { createContext } from "react";

//1. create context
export const ThemeContext = createContext();

//2. create provider -> call 1
export const ThemeProvider = ({children}) => {
    //State action
    const [theme, setTheme] = useState("light");
    const setThemeToDark = () => setTheme("dark");//set state to dark
    const setThemeToLight = () => setTheme("light"); //set state to light

    return (
        <ThemeContext.Provider value={{theme, setThemeToDark, setThemeToLight}}>
            {children}
        </ThemeContext.Provider>
    )
}

//3. custom hooks to call with useContext once
export const useTheme = () => {
    return useContext(ThemeContext);
}

export default ThemeProvider;