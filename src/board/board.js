import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './board.css'
import CreateCard from "../create_card/create_card";
import ModalWindow from "../components/modalWindow";
import {uuid} from "../utils/idGenerator";

const Board = ({boards: initialBoards}) => {

    const [boards, setBoards] = useState(initialBoards)
    const [currentBoard, setCurrentBoards] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    const [isNew, setIsNew] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const [editBoard, setEditBoard] = useState(null)
    const [editItem, setEditItem] = useState(null)

    const dragStartHandler = (e, board, item) => {
        setCurrentBoards(board)
        setCurrentItem(item)
    }


    const newTaskHandler = (title, description, priority) => {
        const newTask = {id: uuid(), title, description, priority}
        boards[0].items.push(newTask)
        setShowModal(false)
    }

    const editTaskHandler = (title, description, priority, board, item) => {
        const indexBoards = boards.indexOf(board)
        const indexItem = boards[indexBoards].items.indexOf(item)
        boards[indexBoards].items[indexItem] = {id: uuid(), title, description, priority}
        setBoards(boards)
        setShowModal(false)
    }

    const dragOverHandler = (event) => {
        event.preventDefault()
        if (event.target.className === 'task') {
            event.target.style.boxShadow = '0 4px 3px black'
        }
    }

    const dragLeaveHandler = event => {
        event.target.style.boxShadow = 'none'
    }

    const dragEndHandler = event => {
        event.target.style.boxShadow = 'none'
    }

    const dropHandler = (event, board, item) => {
        event.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    const dropCardHandler = (event, board) => {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    const deleteTaskHandler = (board, item) => {
        const newBoards = [...boards]
        const indexBoard = boards.indexOf(board)
        const indexItem = boards[indexBoard].items.indexOf(item)
        newBoards[indexBoard].items.splice(indexItem, 1)
        setBoards(newBoards)
    }

    const showEditModalWindow = (board, item) => {
        setShowModal(true)
        setIsNew(false)
        setEditBoard(board)
        setEditItem(item)
    }

    const showAddModalWindow = () => {
        setShowModal(true)
        setIsNew(true)
    }


    const clickOkHandler = (isNew, title, description, priority, editBoard, editItem) => {
        if (isNew) {
            newTaskHandler(title, description, priority)
        } else {
            editTaskHandler(title, description, priority, editBoard, editItem)
        }
    }

    return (
        <div className='board'>
            {showModal === true
                ? <ModalWindow
                    clickOkHandler={clickOkHandler}
                    clickCloseWindowHandler={() => setShowModal(false)}
                    isNew={isNew}
                    editBoard={editBoard}
                    editItem={editItem}
                />
                : ''}
            {showModal === true ? <div style={{
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, .5)',
                position: "absolute",
                zIndex: 5
            }}/> : ''}
            <Container className='board-container'>
                <Row>
                        <CreateCard clickAddTask={() => showAddModalWindow()}/>
                </Row>
                <Row>
                    {boards.map(board => {
                        return (
                            <Col
                                key={board.id}
                                className='col-card'
                                onDragOver={event => dragOverHandler(event)}
                                onDrop={event => dropCardHandler(event, board)}

                            >
                                <span className='title'>{board.title}</span>
                                {board.items.map(item => {
                                        let cls = 'task'
                                        if (item.priority === 'high') {
                                            cls += ' high'
                                        }
                                        if (item.priority === 'medium') {
                                            cls += ' medium'
                                        }
                                        if (item.priority === 'low') {
                                            cls += ' low'
                                        }
                                        return (
                                            <div
                                                key={item.id}
                                                onDragStart={event => dragStartHandler(event, board, item)}
                                                onDragOver={event => dragOverHandler(event)}
                                                onMov
                                                onDragLeave={event => dragLeaveHandler(event)}
                                                onDragEnd={event => dragEndHandler(event)}
                                                onDrop={event => dropHandler(event, board, item)}
                                                draggable={"true"}
                                                className='item'
                                            >
                                                <div className={cls}>
                                                    <div className='task-in'>
                                                        <EditIcon
                                                            className='edit-icon'
                                                            onClick={() => showEditModalWindow(board, item)}
                                                        />
                                                        <DeleteIcon
                                                            className='delete-icon'
                                                            onClick={() => deleteTaskHandler(board, item)}
                                                        />
                                                        <h3>{item.title}</h3>
                                                        <span>{item.description}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </Col>)
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Board