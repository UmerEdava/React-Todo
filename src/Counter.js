import React from 'react'

var count = 0

function Counter(){
    count ++;
    
    return(
        <h3>{count}</h3>
    )
}

export default Counter;