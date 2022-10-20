import React from "react";
import {CardTypeOne} from "./CardTypeOne";


export const Earpods=({items}) => {
    return <div>
        {items.map(item => {
            return <CardTypeOne key={item.title} item = {item}/>
        })}
    </div>
}