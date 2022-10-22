import React from "react";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import classes from "./Header.module.css"


export const Header = () => {
    const navigate = useNavigate();
    const counter = useSelector((state) => state.basketPage.map((box) => {
        return box.count
    }))

    var summ = 0;
    for (let i = 0; i < counter.length; i++) {
        summ = summ + counter[i];
    }


    return (
        <div className={classes.header}>
            <nav className={classes.menu}>
                <div>
                    <div className={classes.pad}>
                        QPICK
                    </div>
                    <a onClick={() => {
                        navigate("/earpods")
                    }}>Наушники</a>
                </div>

                <nav className={classes.menu}>
                    <ul >
                        <a className={classes.basket} onClick={() => {
                            navigate("/basket")
                        }}>Basket</a>
                        <h>{summ}</h>
                    </ul>
                </nav>


            </nav>
        </div>
    )
}