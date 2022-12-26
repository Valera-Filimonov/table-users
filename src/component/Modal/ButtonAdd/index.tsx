import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../modal.module.css'

type PropsButtonAdd = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ButtonAdd = ({open, setOpen}: PropsButtonAdd): JSX.Element => {

    const handlerCloseModal = () => {
        setOpen(!open);
        console.log(open)
    }

    return (
        <div className={styles.buttonAdd}>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerCloseModal} variant="contained">Добавить</Button>
            </Stack>
        </div>
    );
}

export default ButtonAdd;