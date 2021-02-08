const types={
    login:"login",
    logout:"logout",
    deleteAll:"delete-all",
    change:"change"
}
const initialStore=[{
    user:{id:1,name:"Haythan"},
    product:[
        {id:1,title:'producto 1'},
        {id:2,title:"producto 2"}   
    ]
}]

const storeReducer=(state,action)=>{
    
    switch(action.type){
        case types.logout:{
            return{...state,user:null}
        }
        case types.login:{
            return{
                ...state,user:{...state.user,name:action.payload.name}
            }
        }
        case types.deleteAll:
            return{
                ...state,product:[]
            }
        case types.change:
            return{
                ...state,product:[{id:3,title:"producto 3"}]
            }    
        default:
            return state;
    }
}

export{initialStore,types}
export default storeReducer;