import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]
const buildControls=(props)=>(

    <div className="BuildControls">
        <p>Current Price:<strong>{props.price}</strong></p>
        {controls.map(ctrl=>{
            return <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={()=>props.ingredientAdded(ctrl.type)} 
            removed={()=>props.ingrdientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        })}

        <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>

    </div>
);



export default buildControls