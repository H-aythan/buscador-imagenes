import types from "../types";

const initialProducState={
    product:[
        {id:1,title:"producto 1"},
        {id:2,title:"producto 2"},
    ],
    cart:[
        {id:1,title:"producto 1",quantity:1}
    ],
    activeProduct:{id:2,title:"producto preview"}
}

const producReducers=(state,action)=>{
   
    switch(action.type){
        case types.producAddToCart:{
            const newProduct=action.payload; 
            const cartContain=state.cart.find(product=>product.id===newProduct.id);

            return cartContain
            ?{...state,
               cart:state.cart.map(product=>
                product.id===newProduct.id
                ?{...product,quantity:product.quantity+1}
                :product
            )}
            :{...state,
                cart:[...state.cart,
                    {...action.payload,quantity:1}]
            }}
        case types.productShow:
             return{ 
                ...state,
                activeProduct:action.payload}
        case types.producRemoveToCart:
            return{
                ...state,
                cart: state.cart.filter(product=>product.id!==action.payload)
            }   
        case types.producRemoveOneToCart:{
            const productDelete=state.cart.find(product=>product.id===action.payload)
            
            return productDelete.quantity>1
            ?{
                 ...state,
                 cart:state.cart.map(product=>
                    product.id===action.payload
                    ?{...product,quantity:product.quantity-1}
                    :product
              )}
            :{ ...state,
                cart: state.cart.filter(product=>product.id!==action.payload)} 
            }
             
        default:
            return state;
    }
    }
export {initialProducState}
export default producReducers;
    
    
            
            