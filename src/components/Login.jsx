import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SetTokenMembership } from "../redux/slices/loginPremiumSlice";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [warningText, setWarningText] = useState("");
    const inputRef = useRef();
    const passRef  = useRef();

    const mockDataLogin = {
        username : "admin",
        password : "admin123"
    };

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = inputRef.current.value;
        const pass = passRef.current.value;
        if(!user || !pass){
            setWarningText("User dan password harus diisi!")
            return;
        }else if(user !== mockDataLogin.username || pass !== mockDataLogin.password){
            setWarningText("Username atau password salah!")
            return;
        }

        setWarningText("");

        //Set to Redux;
        dispatch(
            SetTokenMembership({
                isTokenMembership : true,
                username: user
            })
        )
        //redirect to premium page
        navigate('/premium')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mt-10 mb-10 gap-3 shadow-md p-5">
                <h1 className="text-2xl">
                    Membership Login
                </h1>
                <div className="text-sm text-red-500 mt-10">
                    {warningText}
                </div>
                <div className="flex gap-2 mt-5">
                    <label typeof="username">Username </label>
                    <input ref={inputRef} type="text" id="username" className="border border-gray-700 rounded-md p-2"></input>
                </div>
                <div className="flex gap-4 mt-5">
                    <label typeof="password">Password</label>
                    <input ref={passRef} type="password" id="password" className="border border-gray-700 rounded-md p-2"></input>
                </div>
                <div className="flex gap-4 mt-5">
                    <button type="submit" className="bg-amber-950 text-white p-2 rounded-md cursor-pointer">Login</button>
                </div>
            </div>
            
            <div className="text-sm italic">* Sample login : admin/admin123</div>
        </form>
    )
}