import React, {useState} from "react";
import styles from "./CardTypeOne.module.css"
import {useDispatch} from "react-redux";
import {addItemAC} from "../state/basketReducer";

export const CardTypeOne = ({item}) => {
    let dispatch = useDispatch();
    return <div className={styles.cardTypeOne}>
        <div className={styles.positionCenter}>
            <img className={styles.img} src={`${process.env.PUBLIC_URL}${item.img}`}/>
        </div>
        <div className={styles.modelAndPrise}>
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
        <div className={styles.modelAndPrise}>
            <p >{item.rate}</p>
            <button className={styles.button} onClick={() => {
                dispatch(addItemAC(item))
            }}>Купить
            </button>
        </div>
    </div>
}