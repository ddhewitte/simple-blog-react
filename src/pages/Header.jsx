import { Link } from "react-router-dom"
import { useLang } from "../context/LanguageContext"

export default function Header(){

    const useLangContext = useLang();
    const { lang } = useLangContext;

    return (
        <>
            <div className="w-full sticky top-0 p-4 bg-gradient-to-r from-blue-900 to-red-900 border-b shadow-sm border-slate-200">
                <div className="flex justify-between items-center text-sm md:text-xl text-white">
                    <div>Blog With React</div>
                    <div>
                        <ul className="flex gap-3">
                             {
                                lang.map((data, index) => (
                                    <li key={index}><Link to={data.link} className="text-white hover:underline decoration-amber-400 decoration-2 decoration-dotted">{data.title}</Link></li>
                                ))
                             }
                        </ul>
                    </div>
                </div>
            </div>
           
        </>
    )
}