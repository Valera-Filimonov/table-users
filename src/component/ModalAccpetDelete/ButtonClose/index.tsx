import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../modal.module.css'
import { PropsButtonClose } from "../types";

const ButtonClose = ({accept, setAccept, setSelectedRow}: PropsButtonClose): JSX.Element => {

    const handlerCloseModal = () => {
        setAccept(!accept);
        setSelectedRow(null);
    }

    return (
        <div className={styles.buttonClose}>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerCloseModal} variant="contained">Нет</Button>
            </Stack>
        </div>
    );
}

export default ButtonClose;