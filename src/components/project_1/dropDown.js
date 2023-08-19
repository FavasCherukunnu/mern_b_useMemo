import React from "react";


export default class DropDown extends React.Component{
    render(){
        const props = this.props;
        return (
            <div>
                <label >View only</label>
                <select onChange={props.filter} name="dropdown" id="cars">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">non-active</option>
                </select>
            </div>
        );
    }
}