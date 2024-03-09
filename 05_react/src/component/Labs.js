import React from "react";
import { useNavigate} from "react-router-dom";

const Labs = () =>{

    const navigate = useNavigate()
    function clickHandler(){
        navigate("/about") 
    }
    function backHandler(){
        navigate(-1)
    }

    

    return(
        <div>
            <div className="bg-purple-500">
            Labs 
        </div>
        <button className="mt-2 outline bg-slate-400 text-white hover:bg-slate-800" onClick={clickHandler}>Move to About page</button>
        <button className="mt-2 outline bg-slate-400 text-white hover:bg-slate-800" onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default Labs