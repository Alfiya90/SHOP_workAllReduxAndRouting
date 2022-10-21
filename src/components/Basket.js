import React from "react";
import {EarpodInBasket} from "./EarpodInBasket";
import {useSelector} from "react-redux";
import classes from "./Basket.module.css"

export const Basket = () => {
    const EarpodsInBasket = useSelector((state) => state.basketPage)

    return <div className={classes.basket}>
        <div className={classes.main}>
            {
                EarpodsInBasket.map((box)=> {return <EarpodInBasket key = {box.item.title} item = {box.item} count ={box.count}/>})
            }
        </div>
        <div className={classes.summ}>
            <p className={classes.text}>Итого</p>
            <p>12555</p>

        </div>
    </div>

}