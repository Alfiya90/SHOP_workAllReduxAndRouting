import React from "react";
import {CardTypeOne} from "./CardTypeOne";
import classes from "./Earpods.module.css"

export const Earpods=({items}) => {
    return <div className={classes.main }>
        <p>
            {items.map(item => {
            return <CardTypeOne key={item.title} item = {item}/>
        })}</p>


    </div>
}