export default function Header(){
    return (
        <>
            <div className="w-full sticky top-0 p-4 bg-gradient-to-r from-blue-900 to-red-900 border-b shadow-sm border-slate-200">
                <div className="flex justify-between items-center text-sm md:text-xl text-white">
                    <div>Blog With React</div>
                    <div>
                        <ul className="flex gap-3">
                            <li>Home</li>
                            <li>Premium</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </>
    )
}