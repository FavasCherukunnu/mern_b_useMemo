import React from "react";
import './card.css'

class Card extends React.Component{
    render(){
        const {title,body,isActive,id} = this.props.element;
        return (
            <div className="card">
                <div className="card-title">
                    <h4>{title}</h4>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
                <button>
                    {isActive?'active':'non-active'}
                </button>
                <button onClick={this.props.deleteHandler}>Delete</button>
                {/* <p onClick={this.props.deleteHandler}>Delete</p> */}
            </div>
        );
    }
}

export default Card;