import React from "react";
import {Button} from "@mui/material";

const CreateCard = ({clickAddTask}) => {
    return (
        <div className='pb-3'>
            <h1 className='mb-5'>Канбан доска</h1>
            <Button
                variant="contained"
                onClick={() => clickAddTask()}
            >Создать
            </Button>
        </div>
    )
}

export default CreateCard