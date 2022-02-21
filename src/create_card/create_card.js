import React from "react";
import './create_card.css'
import {NavLink} from "react-router-dom";

const CreateCard = () => {
    return (
        <div className='create_card'>
            <h1>Drag and drop</h1>
            <NavLink to='/add' className='button' style={{textDecoration: "none", color: 'black'}}>Add</NavLink>

            <hr/>
        </div>
    )
}

export default CreateCard