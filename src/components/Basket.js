import React from "react";
import {EarpodInBasket} from "./EarpodInBasket";
import {useSelector} from "react-redux";


export const Basket = () => {


    const EarpodsInBasket = useSelector((state) => state.basketPage)

    return <div>
        <div>
            {
                EarpodsInBasket.map((box)=> {return <EarpodInBasket key = {box.item.title} item = {box.item} count ={box.count}/>})
            }
        </div>cd
    </div>

}