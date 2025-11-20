import { useEffect } from "react"
import { generalPost } from "../services/post"
import { useState } from "react";
import { truncate } from "../utils/helper";
import { Link } from "react-router-dom";

export default function Homepage(){

    const [post, setPost] = useState([]);

    useEffect(() => {
        //Get GeneralPost
        async function getGeneralPost(){
            const res = await generalPost();
            //sort id DESC and limit 5
            const postSorted = res
                .filter((data) => data.isExclusive === false)
                .sort((a,b) => b.id - a.id)
                .slice(0,5);
            setPost(postSorted);
        }

        getGeneralPost();
        
    }, []);

    return(
        <>
            <div className="flex-row">

                { post && post.map((data) => (

                    <div className="w-full md:w-150 h-auto border-3 border-gray-200 p-5 rounded-md mb-3" key={data.id}>
                        <h1 className="text-sm md:text-xl mb-3 font-bold md:font-normal">{data.title}</h1>
                        <div className="flex justify-between gap-2 mb-3">
                            <img className="w-25 h-15 md:w-50 md:h-auto rounded-md" src={data.image}></img>
                            <p className="text-sm md:text-md">{truncate(data.content, 40)}</p>
                            
                        </div>
                        <div className="flex justify-end text-white">
                            <Link to={`/detail/`+data.id}>
                            <button className="p-2 bg-black rounded-md cursor-pointer hover:shadow-xl">
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}