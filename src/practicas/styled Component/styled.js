import style,{css} from 'styled-components'

export const Cuadrado =style.div`
    width:70px;
    height:70px;
    background-color:pink;
    &:hover{
        background:red;
    }
`;

export const Rectangulo=style(Cuadrado)`
    width:200px;
`;

export const Component = style.div`
    background:${({isRight})=>isRight?'green':'red'};
    
`;

export const Input=style.input.attrs(props=>({
    type:"password",
    maxLength:props.myMaxLength||10,

}))`
color:blue;
`;

const BigText=css`
    font-size:3rem;
`;

export const RedText=style.p`
    background:red;
    ${BigText};
`;

export const BlueText=style.p`
    background:blue;
    ${BigText};
`;