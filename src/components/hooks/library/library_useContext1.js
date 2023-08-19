import React, { useContext } from "react";
import { myContext } from "../useContext";



export function CounterSection(){
    const val = useContext(myContext);
    return(
        <div>
            <h1>{val}</h1>
        </div>
    );
}