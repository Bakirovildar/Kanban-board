import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const CreateNewCard = ({newTaskHandler}) => {

    const [state, setState] = useState({
        title: '',
        description: ''
    })

    const changeTitleHandler = (event) => {
        setState({...state, title: event.target.value})
    }

    const changeDescriptionHandler = (event) => {
        setState({...state, description: event.target.value})
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{marginBottom: '50px'}}>Добавить новую задачу</h1>
                    <Box
                        sx={{
                            width: 1000,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            style={{marginBottom: '10px'}}
                            onChange={event => changeTitleHandler(event)}
                            fullWidth
                            label="Название" id="fullWidth"/>
                        <TextField
                            style={{marginBottom: '10px'}}
                            onChange={event => changeDescriptionHandler(event)}
                            fullWidth label="Описание" id="fullWidth"/>
                        <Button
                            style={{marginRight: '10px'}}
                            variant="contained"
                            disabled={state.title === ''}
                            onClick={() => newTaskHandler(state.title, state.description)}>
                            <NavLink
                                style={{color: 'black', textDecoration: "none"}}
                                to={'/'}>Отправить
                            </NavLink>
                        </Button>
                        <Button
                            variant="outlined"
                        ><NavLink
                            to={'/'}
                            style={{color: 'black', textDecoration: "none"}}>Отмена
                        </NavLink>
                        </Button>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateNewCard