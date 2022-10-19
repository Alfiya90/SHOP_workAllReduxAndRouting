import React from "react";
import classes from "./Earpods.module.css"
import {CardTypeOne} from "./CardTypeOne";

export const Earpods=({items, count})=>{
    return <div>
        {items.map(item =>{
            return <CardTypeOne key={item.title} item={item} count={count} />
        })}

    </div>
}