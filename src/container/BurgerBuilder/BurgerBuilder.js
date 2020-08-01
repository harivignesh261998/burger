import React,{Component} from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modals/Modals'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES={
    salad:50,
    cheese:60,
    meat:80,
    bacon:100
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:120,
        purchasable:false,
        purchasing:false
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true})

    }
updtaePurchaseState(ingredients){
    
    const sum =Object.keys(ingredients).map((igKey)=>{
        return ingredients[igKey]
    }).reduce((sum,el)=>{
        return sum+el
    },0)
    this.setState({purchasable:sum>0});
}
    addIngredient=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngedient={
            ...this.state.ingredients
        }
        updatedIngedient[type]=updatedCount;
        const priceAddition=INGREDIENTS_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngedient});
        this.updtaePurchaseState(updatedIngedient);



    }
    removeIngredient=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngedient={
            ...this.state.ingredients
        }
        updatedIngedient[type]=updatedCount;
        const priceReduction=INGREDIENTS_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceReduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngedient});
        this.updtaePurchaseState(updatedIngedient)


    }
    purchasingCancel=()=>{
        this.setState({purchasing:false})
    }

    purchaseContinue=()=>{
        alert('continue');
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancel} >
                    <OrderSummary ingredients={this.state.ingredients} purchaseCancel={this.purchasingCancel} purchaseContinued={this.purchaseContinue} price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls ingredientAdded={this.addIngredient}
                ingrdientRemoved={this.removeIngredient}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}/>
            </Aux>
        )
    }
}
export default BurgerBuilder;