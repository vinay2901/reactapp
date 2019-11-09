import React from "react"
import BuildControl from "./BuildControl/BuildControl"
import classes from "./BuildControls.css"
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
];

const buildControls =(props)=>(
    <div className={classes.BuildControls}>
        <p><strong>PRICE: {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl key={ctrl.label} label={ctrl.label}
            added={()=>{props.ingredientAdded(ctrl.type)}}
            removed={()=>{props.ingredientRemoved(ctrl.type)}}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable} 
            onClick={props.ordered}
            >
            checkout</button>
    </div> 
)

export default buildControls