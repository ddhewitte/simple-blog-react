import axios from "axios";

const API_ENDPOINT_GENERAL = import.meta.env.VITE_API_BLOG_ENDPOINT;

export async function generalPost(){
    const res = await axios.get(API_ENDPOINT_GENERAL);
    return res.data;
}