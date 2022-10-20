import React from "react";




export const Header=({count, items})=>{

    return(
        <div>
            <div>QPICK</div>
            <a href ="/earpods">Наушники</a>
            <a href ="/basket" count={count} items={items} >Basket</a>
            <a>{count}</a>


        </div>
    )
}