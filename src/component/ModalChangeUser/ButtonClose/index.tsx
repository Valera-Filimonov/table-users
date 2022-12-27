import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../modal.module.css'
import { PropsButtonClose } from "../types";

const ButtonClose = ({change,
                      setChange,
                      setId,
                      setName,
                      setAccess,
                      setLastName,
                      setEmail,
                      setBirthDate
                     }: PropsButtonClose): JSX.Element => {

    const handlerCloseModal = () => {
        setChange(!change);
        setId('');
        setName('');
        setAccess(false);
        setLastName('');
        setEmail('');
        setBirthDate('');
    }

    return (
        <div className={styles.buttonClose}>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerCloseModal} variant="contained">Закрыть</Button>
            </Stack>
        </div>
    );
}

export default ButtonClose;