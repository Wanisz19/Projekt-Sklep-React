export const initialState = {
    basket: [],
    user: null
};



//selector
export const getBasketTotal = (basket) => {
    let total = 0;
    for(let i=0; i<basket.length; i++){
        total+= basket[i].price
    }
    return total;
}

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            
            
            if(index >= 0){
                newBasket.splice(index, 1);
            } 

            return {...state, basket: newBasket};
        
        case "SET_USER":  
         return {
             ...state, user: action.user
         }  

        default:
            return state;
    }
};

export default reducer;