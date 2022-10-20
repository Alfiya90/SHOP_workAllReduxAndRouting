import React, {useState} from "react";
import {CardTypeOne} from "./CardTypeOne";
import classes from "./Basket.module.css"
import store from "../state/store";

export const Basket = ({items}) => {
    const [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1)
    }
    let decrement = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }
    const earpod = items.map(item => item)
    let summ = earpod[1].price * count


    return <div>
        <h4>{earpod[1].title}</h4>
        <div className={classes.image}>
            <img src={`${process.env.PUBLIC_URL}${earpod[1].img}`}/>
        </div>
            {
                store.getState()
            }

    </div>
}