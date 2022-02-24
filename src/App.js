import React from "react";
import './App.css'
import Board from "./board/board";
import {uuid} from "./utils/idGenerator";

function App() {

    const boards = [
        {
            id: 1,
            title: 'К выполнению',

            items: []
        },
        {
            id: 2,
            title: 'В работе',
            items: []
        },
        {
            id: 3,
            title: 'Готово',
            items: []
        },
    ]

    const newTaskHandler = (title, description, priority) => {
        const newTask = {id: uuid(), title, description, priority}
        boards[0].items.push(newTask)
    }

    return (
        <div className='App'>
            <Board boards={boards} newTaskHandler={newTaskHandler}/>
        </div>
    )
}

export default App;
