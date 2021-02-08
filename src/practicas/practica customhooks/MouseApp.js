
import useMousePosition from './hooks/useMousePosition'



const MouseApp = () => {
    
    const position=useMousePosition()
    const back=position.x<window.innerWidth/2?'skyblue':'red'
  
    
    return (
        <div style={{background:back,height:"100vh"}}>
           <pre>
            {JSON.stringify(position,null,1)}   
           </pre>          
        </div>
    )
}

export default MouseApp
