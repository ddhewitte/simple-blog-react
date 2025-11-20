import { useDispatch, useSelector  } from "react-redux"
import { AddToBlogCart } from "../redux/slices/blogCartSlice"

export default function Cart(){

    const dispatch = useDispatch();

    //action to add
    dispatch( AddToBlogCart({ id: 5, postCount: 15 }) );
    //check with store log to see.

    //get the state
    const items = useSelector((state) => state.blogCart.items);
    console.log(items);

    return(
        <>
            <div>Cart page in redux, cek log</div>
        </>
    )
}