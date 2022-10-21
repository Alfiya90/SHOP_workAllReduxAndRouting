import React from "react";
import {connect} from "react-redux";
import EarpodInBasket from "./EarpodInBasket";

let mapStateToProps = (state) => {
    return{
        state:state
    }
}
let mapDispatchToProps = (dispath) => {
}
export let EarpodIdBasketContainer = connect(mapStateToProps, mapDispatchToProps)(EarpodInBasket)