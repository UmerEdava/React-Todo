import React from 'react'

function Contact(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <label> Name</label>
            <input type="text" placeholder="Enter your name" />
            <br/>
            <label>Message</label>
            <textarea placeholder="Enter some message" ></textarea>
            <br/>
            <button>Next</button>

        </div>
    )
}

export default Contact;