import { useReducer } from "react";
import types from './types'
import producReducers, { initialProducState } from "./reducers/producReducer";


const ProductApp = () => {
    const[productState,dispatch]=useReducer(producReducers,initialProducState);
    const {product,cart,activeProduct}=productState;
    
    return (
        <div>
            <h2>Product</h2>
            <ul>
                {product.map(product=>{
                    return(
                    <li key={product.id}>
                        {product.title}
                        <button onClick={()=>dispatch({
                            type:types.productShow,
                            payload:product,    
                        })}>
                            show
                        </button>
                        <button onClick={()=>dispatch({
                            type:types.producAddToCart,
                            payload:product
                            
                        })}>
                            add to cart
                        </button>
                    </li>
                    )
                })}
            </ul>
            <h2>Cart</h2>
            <ul>
                {cart.map(product=>{
                    return(
                    <li key={product.id}>
                        {product.title}-cantidad:{product.quantity}
                        <button onClick={()=>dispatch({
                            type:types.producRemoveOneToCart,
                            payload:product.id,
                            })}>
                            Remove one
                        </button>
                        <button onClick={()=>dispatch({
                            type:types.producRemoveToCart,
                            payload:product.id,
                            })}>
                            Remove all
                        </button>
                    </li>
                    )
                })}
            </ul>
            <h2>Preview</h2>
            <p>{activeProduct.title}</p>
        </div>
    )
}

export default ProductApp;
