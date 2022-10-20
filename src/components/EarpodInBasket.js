import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItemAC, deleteItemAC} from "../state/basketReducer";


export const EarpodInBasket = ({item, count}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <h4>{item.title}</h4>
            <div>
                <img src={`${process.env.PUBLIC_URL}${item.img}`}/>
            </div>
            <div>
                {item.price}
            </div>
            <div>
                <button onClick={ () => {
                    dispatch(deleteItemAC(item))
                }}> -</button>
                <a> {count} </a>
                <button onClick={ () => {
                    dispatch(addItemAC(item))
                }}> +</button>
            </div>
        </div>)
}

