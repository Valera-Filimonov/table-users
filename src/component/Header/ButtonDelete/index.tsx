import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../header.module.css'
import {useEffect} from "react";
import {PropsButtonDelete} from "../types";

const ButtonDelete = ({statusButtonDelete, setStatusButtonDelete, selectedRow}: PropsButtonDelete): JSX.Element => {

    useEffect(() => {
        if (statusButtonDelete) {
            setTimeout(() => {
                setStatusButtonDelete(false);
            }, 500)
        }
    }, [statusButtonDelete])

    const handlerDeletedUser = () => {
        console.log(selectedRow)
        setStatusButtonDelete(!statusButtonDelete);
    }

    return (
        <div className={styles.buttonDelete}>
            <Stack spacing={2} direction="row">
                {!statusButtonDelete &&
                <Button onClick={handlerDeletedUser}
                        variant="contained"
                        color="error"
                >
                    Удалить
                </Button>
                }
                {statusButtonDelete &&
                <Button onClick={handlerDeletedUser}
                        variant="contained"
                        color="success"
                >
                    Удалено
                </Button>
                }
            </Stack>
        </div>
    );
}

export default ButtonDelete;