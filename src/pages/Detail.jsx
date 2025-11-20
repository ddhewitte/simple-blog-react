import { useParams } from "react-router-dom"
import { generalPost } from "../services/post";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Detail(){
    const [detailPost, setDetailPost] = useState([]);
    const { id } = useParams();

    useEffect(()=> {
        async function getData() {
            const res = await generalPost();
            //filter by id
            const dataById = res.filter((data) => data.id === id);
            setDetailPost(dataById);
        }
        getData();
    }, []);

    return(
        <>
            <div className="flex-row">
                { detailPost && detailPost.map((data) => (
                    <div className="w-full md:w-150 h-auto border-3 border-gray-200 p-5 rounded-md mb-3" key={data.id}>
                        <h1 className="text-sm md:text-xl mb-3 font-bold md:font-normal">{data.title}</h1>
                        <div className="flex-row justify-between gap-2 mb-3">
                            <img className="w-full md:w-full md:h-auto rounded-md" src={data.image}></img>
                            <p className="text-sm md:text-md whitespace-pre-line">{data.content}</p>        
                        </div>
                        <div className="flex justify-end text-white">
                            <Link to={`/`}>
                            <button className="p-2 bg-black rounded-md cursor-pointer hover:shadow-xl">
                                Back
                            </button>
                            </Link>
                        </div>
                    </div>
                ))} 
            </div>
        </>
    )
}