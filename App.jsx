import React, { useState } from "react";
import './index.css';
import List from './List';

const App = ()=> {

 const[inputList , setInputList] = useState("");
 const[Items ,setItems] =useState([]);

 const itemsEvent = (event)=>{
          setInputList(event.target.value);
 };
  const listOfItems=()=>{
        setItems((oldItems) =>{
            return [...oldItems , inputList];
        });
        setInputList("");
  };
  const deleteItems = (id)=>{
    console.log("deleted");

    setItems((oldItems) =>{
        return oldItems.filter((arrElem , index)=>{
            return index !== id;
        });
    });
  };


   return(
        <div className="main_div">
            <div className="center_div">
             <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text " placeholder="Add a Items"
                  value={inputList} onChange={itemsEvent}/>
            <button onClick={listOfItems}> + </button>

            <ol>
                {/*<li>{inputList}</li>*/}
                {Items.map((itemval ,index)=>{
                    return <List  
                    key ={index}
                    id={index} 
                    text={itemval}
                    onSelect={deleteItems}
                    />;
                })}
            </ol>
            </div>
        </div>
   ); 
};

export default App;
