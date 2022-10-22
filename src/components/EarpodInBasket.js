import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItemAC, deleteItemAC} from "../state/basketReducer";
import classes from "./EarpodInBasket.module.css"

export const EarpodInBasket = ({item, count, summ}) => {
    const dispatch = useDispatch()

    return (
        <div className={classes.appWrapper}>
            <div>

                <h4 className={classes.model}>{item.title}</h4>
                <div>
                    <img  className={classes.picture} src={`${process.env.PUBLIC_URL}${item.img}`}/>
                </div>
                <div className={classes.addAndDelete}>
                    <nav>
                        <button className={classes.bn} onClick={ () => {
                            dispatch(deleteItemAC(item))
                        }}> -</button>
                        <a className={classes.count}> {count} </a>
                        <button className={classes.bn} onClick={ () => {
                            dispatch(addItemAC(item))
                        }}> +</button>
                    </nav>
                    <div className={classes.summ}>
                        <h4>
                            {summ}
                        </h4>
                    </div>
                </div>
            </div>
        </div>)
}

