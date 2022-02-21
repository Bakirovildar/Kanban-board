import React from "react";
import './App.css'
import Board from "./board/board";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateNewCard from "./createNewCard/createNewCard";
import {uuid} from "./utils/idGenerator";

function App() {

    const boards = [
        {
            id: 1,
            title: 'todo',
            items: [{id: uuid(), title: 'Пойти в магазин'}]
        },
        {
            id: 2,
            title: 'progress',
            items: [{id: uuid(), title: 'Пойти '}]
        },
        {
            id: 3,
            title: 'done',
            items: [{id: uuid(), title: ' магазин3'}]
        },
    ]

    const newTaskHandler = (title, description) => {
        const newTask = {id: uuid(), title, description}
        boards[0].items.push(newTask)
    }

    return (
            <div className='App'>
                <Router>
                    <Routes>
                        <Route path='/'  element={<Board boards={boards}/>} />
                        <Route path='/add'  element={<CreateNewCard newTaskHandler={newTaskHandler}/>} />
                    </Routes>
                </Router>
            </div>
    )
}

export default App;
