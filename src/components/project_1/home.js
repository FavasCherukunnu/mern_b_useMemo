import React from "react";
import Card from "./card/card";
import './home.css';
import DropDown from "./dropDown";

var dat = [
    {
        id: 1,
        title:'First Card',
        body:'thislfkdjlf dskj dfjsl fjlkgjer gfori  rewoijr reiojgnb fknlbf',
        isActive:true,
    },
    {
        id: 2,
        title:'Second Card',
        body:'thislfkdjlf dskj dfjsl fjlkgjer gfori  rewoijr reiojgnb fknlbf',
        isActive:true,
    },
    {
        id: 3,
        title:'Third Card',
        body:'thislfkdjlf dskj dfjsl fjlkgjer gfori  rewoijr reiojgnb fknlbf',
        isActive:false,
    },
    {
        id:4,
        title:'Fourth Card',
        body:'thislfkdjlf dskj dfjsl fjlkgjer gfori  rewoijr reiojgnb fknlbfhhj hkjjk',
        isActive:true,
    },
    {
        id:5,
        title:'Fifth Card',
        body:'thislfkdjlf dskj dfjsl fjlkgjer gfori  rewoijr reiojgnb fknlbfgfds  sdffs s',
        isActive:false,
    },
]


//Home
export default class Project1_home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data:dat
        }
    }
    arr=[...dat];
    
    filter = (element)=>{
        var val = element.target.value
        this.arr = this.state.data.filter((item)=>{
            if(val === 'all'){
                return true;
            }else if(val === 'active'){
                return item.isActive===true;
            }else if(val ==='non-active'){
                return item.isActive===false;
            }
        });

        this.setState({});
    }

    deleteHandler = (id)=>{
        this.arr = this.state.data.filter((item)=>{
            return item.id !== id;
        });

        this.setState({data:this.arr})
    }

    buildList(){
        
        return this.arr.map((element,index)=>{
            return <Card key={index} element={element} deleteHandler = {()=>{this.deleteHandler(element.id)}}
             />
        })
    }

    render(){
        return (
            <div>
                <div className="home-head">
                    <h1>HoME pAgE</h1>
                    <DropDown filter={this.filter}/>
                </div>
                <div className="home-body">
    
                    {this.buildList()}
                </div>
    
            </div>
        );
    }
}

