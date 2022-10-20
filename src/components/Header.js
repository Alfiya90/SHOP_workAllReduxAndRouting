import React from "react";
import {useNavigate} from "react-router";



export const Header=({count, items})=>{
    const navigate = useNavigate();
    return(
        <div>
            <div>QPICK</div>
            <a onClick={() =>{navigate("/earpods")}} >Наушники</a>
            <a onClick={() =>{navigate("/basket")}} >Basket</a>
            <p>{count}</p>


        </div>
    )
}