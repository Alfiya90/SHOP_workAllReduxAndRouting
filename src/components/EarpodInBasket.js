import React from "react";
import {addItemAC} from "../state/basketReducer";
import {deleteItemAC} from "../state/basketReducer";

const EarpodInBasket = ({item, count}) => {

    return (
        <div>
           <h4>{item.title}</h4>
            <div>
                <img  src={`${process.env.PUBLIC_URL}${item.img}`}/>
            </div>
            <div>
                {item.price}
            </div>
            <div>
                <button >-</button>
                <a>{count}</a>
                <button >+</button>
            </div>
        </div>)
}

export  default EarpodInBasket;