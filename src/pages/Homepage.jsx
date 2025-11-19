export default function Homepage(){
    return(
        <>
            <div className="flex-row">
                <div className="w-full md:w-150 h-auto border-3 border-gray-200 p-5 rounded-md mb-3">
                    <h1 className="text-sm md:text-xl mb-3 font-bold md:font-normal">Minimalism in design is not just about using less</h1>
                    <div className="flex justify-between gap-2 mb-3">
                        <img className="w-25 h-15 md:w-50 md:h-auto rounded-md" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"></img>
                        <p className="text-sm md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>
                    <div className="flex justify-end text-white">
                        <button className="p-2 bg-gradient-to-r from-blue-900 to-red-900 rounded-md">Read More</button>
                    </div>
                </div>

                <div className="w-full md:w-150 h-auto border-3 border-gray-200 p-5 rounded-md mb-3">
                    <h1 className="text-sm md:text-xl mb-3 font-bold md:font-normal">Minimalism in design is not just about using less</h1>
                    <div className="flex justify-between gap-2 mb-3">
                        <img className="w-25 h-15 md:w-50 md:h-auto rounded-md" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"></img>
                        <p className="text-sm md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>
                    <div className="flex justify-end text-white">
                        <button className="p-2 bg-gradient-to-r from-blue-900 to-red-900 rounded-md">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}