import React, {useState} from "react";
import {CardTypeOne} from "./CardTypeOne";
import classes from "./Basket.module.css"
import store from "../state/store";
import EarpodInBasket from "./EarpodInBasket";

export const Basket = ({state}) => {
    debugger;

    return <div>


        <div>
            {state.map((box)=> {return <EarpodInBasket key = {box.item.title} item = {box.item} count ={box.count}/>})
            }
        </div>cd

    </div>

}