import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../header.module.css'

const ButtonCreate = (): JSX.Element => {
    return (
        <div className={styles.button}>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Создать</Button>
            </Stack>
        </div>
    );
}

export default ButtonCreate;