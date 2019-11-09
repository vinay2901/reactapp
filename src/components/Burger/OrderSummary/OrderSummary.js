import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button"

const orderSummary =(props)=>{

    
    const ikeys = Object.keys(props.ingredients)
    const ingredientSummary = ikeys.map((key)=>{
        return <li><span>{key} :{props.ingredients[key]}</span> </li>
    })


    return (
        <Aux>
            <h3>Your order</h3>
            <p>your burger ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>continue to checkout</p>
            <Button btnType="Danger" clicked={props.a}>CANCEL</Button>
            <Button btnType="Success" clicked={props.a}>CONTINUE</Button>
        </Aux>
    ) 
}

export default orderSummary;