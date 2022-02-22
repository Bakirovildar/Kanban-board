import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {NavLink} from "react-router-dom";

const CreateNewCard = ({newTaskHandler}) => {

    const [state, setState] = useState({
        title: '',
        description: '',
        priority: ''
    })

    const changeTitleHandler = (event) => {
        setState({...state, title: event.target.value})
    }

    const changeDescriptionHandler = (event) => {
        setState({...state, description: event.target.value})
    }

    const changeRadioButton = event => {
         setState({...state, priority: event.target.value})
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
                        <FormControl onChange={event => changeRadioButton(event) }>
                            <FormLabel id="demo-radio-buttons-group-label">Приоритет</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="medium"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="high" control={<Radio />} label="Высокий" />
                                <FormControlLabel value="medium" control={<Radio />} label="Средний" />
                                <FormControlLabel value="low" control={<Radio />} label="Низкий" />
                            </RadioGroup>
                        </FormControl>
                        <br/>
                        <Button
                            style={{marginRight: '10px', marginTop: '10px'}}
                            variant="contained"
                            disabled={state.title === ''}
                            onClick={() => newTaskHandler(state.title, state.description, state.priority)}>
                            <NavLink
                                style={{color: 'black', textDecoration: "none"}}
                                to={'/Kanban-board'}>Отправить
                            </NavLink>
                        </Button>
                        <Button style={{marginTop: '10px'}}
                            variant="outlined"
                        ><NavLink
                            to={'/Kanban-board'}
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