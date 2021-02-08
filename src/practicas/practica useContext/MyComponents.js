import {StoreContex, useDispatch, useStore } from "./store/StoreProvider"
import { types } from "./store/StoreReducer";
import {useContext} from 'react'

const MyComponents = () => {
     const [store,dispatch]=useContext(StoreContex)
    const {user,product,vars}=useStore();
    
    //const dispatch=useDispatch();
    
    console.log(vars)
    return (
        <div >
            <h2>MyComponents</h2>
            <h4>Usuario: {user?user.name:'Bienvenid@'}</h4>
            
            <button onClick={()=>dispatch({type:types.logout})}>
                Logout
            </button>
           
            <button onClick={()=>dispatch({
                type:types.login,
                payload:{id:1,name:"Haythan"}
            })}>
                Login
            </button>

            <h2>Products</h2>

            <ul>
                {/* {product.map(product=>
                    <li key={product.id}>{product.title}</li>
                )} */}
            </ul>

            <button onClick={()=>dispatch({
                type:types.deleteAll
                })}>
                delete all
            </button>
            
            <button onClick={()=>dispatch({
                type:types.change
                })}>
                Change
            </button>
        </div>
    )
}

export default MyComponents
