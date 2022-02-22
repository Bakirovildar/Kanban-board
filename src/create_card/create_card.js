import React from "react";
import './create_card.css'
import {NavLink} from "react-router-dom";

const CreateCard = () => {
    return (
        <div className='create_card'>
            <h1 className='mb-5'>Канбан доска</h1>
            <NavLink to='add' className='button' style={{textDecoration: "none", color: 'black'}}>Добавить задачу</NavLink>

            <hr/>
        </div>
    )
}

export default CreateCard