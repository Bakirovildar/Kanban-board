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


    return (
        <div className='App'>
            <Board boards={boards}/>
        </div>
    )
}

export default App;
