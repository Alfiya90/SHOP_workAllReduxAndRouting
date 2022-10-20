import React from "react";
import classes from "./Earpods.module.css"
import {CardTypeOne} from "./CardTypeOne";
import EarpodInBasket from "./EarpodInBasket";

export const Earpods=({items, count, state})=>{

    return <div>
        {items.map(item =>{
            return <CardTypeOne key={item.title} item={item} count={count} />
        })}

    </div>
}