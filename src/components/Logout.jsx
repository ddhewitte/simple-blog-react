import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SetTokenMembership } from "../redux/slices/loginPremiumSlice";

export default function Logout(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        //Set to Redux;
        dispatch(
            SetTokenMembership({
                isTokenMembership : false,
                username: ""
            })
        )
        //redirect to premium page
        navigate('/')
    },[])

    
}