import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../header.module.css'

type PropsButtonCreate = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ButtonCreate = ({open, setOpen}: PropsButtonCreate): JSX.Element => {

    const handlerOpenModal = () => {
        setOpen(!open);
        console.log(open)
    }

    return (
        <div className={styles.button}>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerOpenModal} variant="contained">Создать</Button>
            </Stack>
        </div>
    );
}

export default ButtonCreate;