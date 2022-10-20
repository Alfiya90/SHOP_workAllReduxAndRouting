import React, {useState} from "react";
import styles from "./CardTypeOne.module.css"
import {useDispatch} from "react-redux";
import {addItemAC} from "../state/basketReducer";

export  const CardTypeOne =({item})=>{
    let dispatch = useDispatch();
    return <div className ={styles.cardTypeOne}>
        <div className={styles.positionCenter} >
            <img className ={styles.img} src={`${process.env.PUBLIC_URL}${item.img}`}/>
        </div>
        <div className={styles.firstRow}>
            <div className= {styles.flex1}>
                <p>{item.title}</p>
            </div>
            <div className={styles.flex3}>
                <p>{item.price}</p>
            </div>
        </div>
        <div className={styles.secondRow} >
            <div className= {styles.flex1}>
                <p>{item.rate}</p>
            </div>
            <div>
                <button onClick={() => {
                    dispatch(addItemAC(item))
                }}>Купить</button>
            </div>
        </div>

    </div>
}