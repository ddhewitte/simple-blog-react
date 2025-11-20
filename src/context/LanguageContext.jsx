import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const langId = [         
    {
        title: "Beranda",
        link: "/"
    },
    {
        title: "Premium",
        link: "/premium"
    },
    {
        title: "Login",
        link: "/login"
    }
];

const langEn = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Premium",
        link: "/premium"
    },
    {
        title: "Login",
        link: "/login"
    }
];

//create context
export const LangContext = createContext();

//create provider
export const LangContextProvider = ({children}) => {
    //state
    const [lang, setLang] = useState(langEn);
    const setLangToID = () => setLang(langId);
    const setLangToEn = () => setLang(langEn);

    return(
        <LangContext.Provider value={{lang, setLangToID, setLangToEn}}>
            {children}
        </LangContext.Provider>
    )

}

export const useLang = () => {
    return useContext(LangContext);
}

export default LangContextProvider;