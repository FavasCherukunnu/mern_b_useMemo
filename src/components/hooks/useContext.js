import React, { useState } from "react";
import { CounterSection } from "./library/library_useContext1";


export const myContext = React.createContext();

export function UseContextExample(){

    const [count,setCount] = useState(0);

    return (
        <div>
            <center>
                <h1>useContext Example</h1>
                <button onClick={()=>{setCount(count+1)}}>Incriment</button>
                <myContext.Provider value={count}>
                    <CounterSection/>
                </myContext.Provider>
            </center>
        </div>
    );

}