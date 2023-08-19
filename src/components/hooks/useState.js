import { useState } from "react";

export function Counter(){


    const[
        value,
        setValue
    ] = useState(0);

    const [color,setColor] = useState('white');


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
                            return val-5;
                        }
                    )}
                    }><h3>Incriment</h3></button>
                <br/>
                <button key={'green'}  onClick={()=>{
                    setColor('green')
                }}>Green</button>
                <button key={'yellow'}  onClick={()=>{
                    setColor('yellow')
                }}>Yellow</button>
            </center>
        </div>
    );

}