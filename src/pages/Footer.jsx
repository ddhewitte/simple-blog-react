import { useLang } from "../context/LanguageContext"

export default function Footer({setDark, setLight}){

    const useLangContext = useLang();
    const { setLangToID, setLangToEn } = useLangContext;

    return(
        <div className="flex justify-center mt-5 text-sm p-4 bottom-0">
            <div className="flex-row justify-center text-center"> 
                <p>Copyright 2025 Blog by React</p>
                <p className="text-gray-500">Created by by AdjiHendrawan - Indonesia (Themes : <a onClick={setDark} className="cursor-pointer underline">Dark</a> / <a onClick={setLight} className="cursor-pointer underline">Light</a>) (Language : <a onClick={setLangToEn} className="cursor-pointer underline">En</a> / <a onClick={setLangToID} className="cursor-pointer underline">Id</a>)</p>
            </div>
        </div>
    )
}