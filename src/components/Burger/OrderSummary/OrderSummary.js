import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    
    .map(igKey=>{
    return( <li key={igKey}>{igKey}:{props.ingredients[igKey]}</li>);
    });
   
    return(
        <Aux>
             <h3>Order Summary</h3>
            <p>Delicious burger with the following ingrdients</p>
           <ul>
               {ingredientSummary}
            </ul>
    <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>

        </Aux>
    )

}
export default orderSummary 