import {useState, createContext, useContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";

const StoreContex=createContext();


const StoreProvider=({children})=>{
    const [store,dispatch]= useReducer(storeReducer,initialStore)
    
    
    return(
    <StoreContex.Provider value={[store,dispatch]}>
        {children}
    </StoreContex.Provider>
    )
}
const useStore=()=>useContext(StoreContex)[0]
const useDispatch=()=>useContext(StoreContex)[1]
export {StoreContex,useStore,useDispatch}
export default StoreProvider