export default function Login(){

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit..")
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mt-10 mb-10 gap-3 shadow-md p-5">
                <h1 className="text-2xl">
                    Membership Login
                </h1>
                <div className="flex gap-2 mt-10">
                    <label typeof="username">Username </label>
                    <input type="text" id="username" className="border border-gray-700 rounded-md p-2"></input>
                </div>
                <div className="flex gap-4 mt-5">
                    <label typeof="password">Password</label>
                    <input type="password" id="password" className="border border-gray-700 rounded-md p-2"></input>
                </div>
                <div className="flex gap-4 mt-5">
                    <button type="submit" className="bg-amber-950 text-white p-2 rounded-md cursor-pointer">Login</button>
                </div>
            </div>
            
        </form>
    )
}