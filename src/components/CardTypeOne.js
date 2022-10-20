import React, {useState} from "react";
import styles from "./CardTypeOne.module.css"

export  const CardTypeOne =({item})=>{

    const [count, setCount]=useState(0);
    let increment=()=>{
        setCount(count+1)
    }

    return <div className ={styles.cardTypeOne}>
            <div>{count}</div>
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
                <button onClick={increment}>Купить</button>
            </div>
        </div>

    </div>
}