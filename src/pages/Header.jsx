import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
            <div className="w-full sticky top-0 p-4 bg-gradient-to-r from-blue-900 to-red-900 border-b shadow-sm border-slate-200">
                <div className="flex justify-between items-center text-sm md:text-xl text-white">
                    <div>Blog With React</div>
                    <div>
                        <ul className="flex gap-3">
                            <li><Link to="/" className="text-white hover:underline decoration-amber-400 decoration-2 decoration-dotted"> Home </Link></li>
                            <li><Link to="/premium" className="text-white hover:underline decoration-amber-400 decoration-2 decoration-dotted"> Premium </Link></li>
                            <li><Link to="/login" className="text-white hover:underline decoration-amber-400 decoration-2 decoration-dotted"> Login </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </>
    )
}