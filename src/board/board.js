import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import './board.css'
import CreateCard from "../create_card/create_card";

const Board = ({boards: initialBoards}) => {

    const [boards, setBoards] = useState(initialBoards)
    const [currentBoard, setCurrentBoards] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    const dragStartHandler = (e, board, item) => {
        setCurrentBoards(board)
        setCurrentItem(item)
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

    return (
        <div className='board'>
            <Container>
                <Row> <CreateCard/> </Row>
                <Row>
                    {boards.map(board => (
                        <Col
                            key={board.id}
                            className='col-card'
                            onDragOver={event => dragOverHandler(event)}
                            onDrop={event => dropCardHandler(event, board)}

                        >
                            {board.items.map(item =>
                                <div
                                    key={item.id}
                                    onDragStart={event => dragStartHandler(event, board, item)}
                                    onDragOver={event => dragOverHandler(event)}
                                    onDragLeave={event => dragLeaveHandler(event)}
                                    onDragEnd={event => dragEndHandler(event)}
                                    onDrop={event => dropHandler(event, board, item)}
                                    draggable={"true"}
                                    className='item'
                                >
                                    <div className='task'>
                                        <div className='task-in'>
                                            <h3>{item.title}</h3>
                                            <span>{item.description}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Col>))}
                </Row>
            </Container>
        </div>
    )
}

export default Board