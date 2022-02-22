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
            items: [{id: uuid(), title: 'Пойти в магазин', priority: 'high'}]
        },
        {
            id: 2,
            title: 'progress',
            items: [{id: uuid(), title: 'Пойти', priority: 'medium'}]
        },
        {
            id: 3,
            title: 'done',
            items: [{id: uuid(), title: ' магазин3', priority: 'low'}]
        },
    ]

    const newTaskHandler = (title, description, priority) => {
        const newTask = {id: uuid(), title, description, priority}
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
