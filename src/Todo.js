import React from 'react'
import './todo.css'

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
            txtContent : ""
        }
    }

    txtChange = (e)=>{
        this.setState({txtContent : e.target.value}) 
    }

    addItem = (e)=>{
        let currentText = this.state.txtContent
        let currentItems = this.state.items
        currentItems.push(currentText)
        this.setState({items:currentItems})
        alert('Item added')
    }

    removeItem = (k)=>{
        if(!window.confirm("Are you sure to remove this item?")){
            return;
        }
        let currentItems = this.state.items
        currentItems.splice(k,1)
        this.setState({items:currentItems})
    }

    render(){
        return(
            <div id="addBox">
                <input type="text" onChange={this.txtChange} />
                <button onClick={this.addItem} type='submit'>Add</button>

                <ul>
                    
                    {
                        this.state.items.map((item,k)=>{
                            return(
                                <li>{item} <button onClick={()=>{this.removeItem(k)}} >Remove</button></li>
                                
                            )
                        })
                    }
                </ul>
                <p>{this.state.txtContent}</p>
            </div>
        )
    }
}

export default Todo