import React from 'react'
import {Link,Redirect,withRouter}from 'react-router-dom';

const Navegation = (props) => {
    const {history}=props;
    console.log(history);
    return (
        <>
            <button onClick={()=>history.goBack()}>
                Go back
            </button>
            <button onClick={()=>history.goForward()}>
                Go Forward
            </button>
            {/* forma 1 de hacer rutas */}
           <ul>
               <li>
                   <Link to="/inicio">Inicio</Link>
               </li>
               <li>
                   <Link to="/2daPage">2daPagina</Link>
               </li>
               <li>
                   <Link to="/3eraPage">3eraPagina</Link>-
               </li>
           </ul>
            {/* forma 2 de hacer rutas */}
            <button onClick={()=>history.push('/inicio')}>
                 Inicio
            </button>
            <button onClick={()=>history.push('/2daPage')}>
                 2daPage
            </button>
            <button onClick={()=>history.push('/3eraPage')}>
                 3eraPage
            </button>
          {false&&<Redirect to="test"/>}
        </>
    )
}

export default withRouter(Navegation)
            
