import React from "react";
import './create_card.css'

const CreateCard = ({clickAddTask}) => {
    return (
        <div className='create_card'>
            <h1 className='mb-5'>Канбан доска</h1>
            <div className='button' style={{color: 'black'}} onClick={() => clickAddTask()}>Добавить задачу</div>

            <hr/>
        </div>
    )
}

export default CreateCard