import React, {useState} from "react";
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {Col, Container, Row} from "react-bootstrap";
import Box from "@mui/material/Box";
import './modalWindow.css'

const ModalWindow = ({
                         isNew,
                         clickOkHandler,
                         clickCloseWindowHandler,
                         editBoard,
                         editItem
                     }) => {
    const initialState = isNew
        ? {
            title: '',
            description: '',
            priority: 'medium'
        }
        : editItem

    const [state, setState] = useState(initialState)

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
        <Container className='modalWindow'>
            <Row>
                <Col>
                    <h1 style={{marginBottom: '50px'}}>{isNew ? 'Добавить задачу' : 'Редактировать задачу'}</h1>
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
                            defaultValue={state.title}
                            label="Название" id="fullWidth"/>
                        <TextField
                            style={{marginBottom: '10px'}}
                            onChange={event => changeDescriptionHandler(event)}
                            fullWidth label="Описание" id="fullWidth"
                            defaultValue={state.description}
                        />
                        <FormControl onChange={event => changeRadioButton(event)}>
                            <FormLabel id="demo-radio-buttons-group-label">Приоритет</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={state.priority}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="high" control={<Radio/>} label="Высокий"/>
                                <FormControlLabel value="medium" control={<Radio/>} label="Средний"/>
                                <FormControlLabel value="low" control={<Radio/>} label="Низкий"/>
                            </RadioGroup>
                        </FormControl>
                        <br/>
                        <Button
                            style={{position: "absolute", bottom: '20px', right: '130px'}}
                            variant="contained"
                            disabled={state.title === ''}
                            onClick={() => clickOkHandler(isNew, state.title, state.description, state.priority, editBoard, editItem)}
                        >OK
                        </Button>

                        <Button
                            style={{position: "absolute", bottom: '20px', right: '20px'}}
                            variant="outlined"
                            onClick={() => clickCloseWindowHandler()}
                        > Отмена
                        </Button>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

export default ModalWindow