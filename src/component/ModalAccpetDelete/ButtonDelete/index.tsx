import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../modal.module.css'
import { PropsButtonDelete } from "../types";

const ButtonDelete = ({
                      accept,
                      setAccept,
                      setStatusButtonDelete,
                      statusButtonDelete,
                      setSelectedRow,
                   }: PropsButtonDelete):
    JSX.Element => {

    const handlerCloseModal = () => {
            setAccept(!accept);
            setStatusButtonDelete(!statusButtonDelete);
            setSelectedRow(null);
    }

    return (
        <>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerCloseModal}
                        variant="contained"
                        color="error"
                >
                    Да
                </Button>
            </Stack>
        </>
    );
}

export default ButtonDelete;