import React from "react"

class List extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            items : ['apple','orange','mango','pineapple'],
            users : [
                {name:"Raju",age:14},
                {name:"Radha",age:13}
            ]
        }

        
        
    }

    render(){
        
        return(
            <div>
                <ul>
                    {this.state.items.map((item,k)=><li key={k} >{item}</li>)
                }
                </ul>

                <table>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>

                    {
                        this.state.users.map((item,k)=>{
                            return(
                                <tr>
                                    <td>{item.name} </td>
                                    <td>{item.age} </td>
                                </tr>
                            )
                        })

                        
                    }
                </table>
            </div>
        )
    }

}

export default List