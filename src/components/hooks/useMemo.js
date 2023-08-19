import React, { useMemo } from "react";

import { useState } from "react";



//bottom container renders every time the state change when we are not using use React.memo
//React.memo avoid rerendering but if we pass props to it, it will rerender if the props value change. if we pass object as props it will render every time even if the object value is not changed. to solve this we use useMemo
function BottomContainerBox(props){
    console.log('rendering bottom Container');
    return (
        <div style={{width:'200px',height:'400px',backgroundColor:props.dat.color==='green'?'yellow':'green'}}>
            <p>{props.dat.content}</p>
        </div>
    );
}
const BottDiv = React.memo(BottomContainerBox);


export function UseMemoExample(){


    const[
        value,
        setValue
    ] = useState(0);

    const [color,setColor] = useState('white');

    const botComponentData = {
        color:color,
        content:'This is content'
    }

    const dat = useMemo(()=>{
        return {...botComponentData};
    },[botComponentData.color,botComponentData.content])


    return (
        <div style={{backgroundColor:color}}>
            <center>
                <button key={'top'} onClick={()=>{setValue(value+1)}}><h3>Incriment</h3></button>
                <br/>
                <h1>{value}</h1>
                <br/>
                <button key={'bottom'} onClick={
                    ()=>{setValue(
                        (val)=>{
                            return val-1;
                        }
                    )}
                    }><h3>Decriment</h3></button>
                <br/>
                <button key={'green'}  onClick={()=>{
                    setColor('green')
                }}>Green</button>
                <button key={'yellow'}  onClick={()=>{
                    setColor('yellow')
                }}>Yellow</button>
                <BottDiv dat={dat}/>
            </center>
        </div>
    );

}