import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../header.module.css'
import {useEffect} from "react";
import { PropsButtonCreate } from "../types";

const ButtonCreate = ({open,
                       setOpen,
                       statusButtonCreate,
                       setStatusButtonCreate
                       }: PropsButtonCreate): JSX.Element => {

    useEffect(() => {
        if (statusButtonCreate) {
            setTimeout(() => {
                setStatusButtonCreate(false);
            }, 500)
        }
    }, [statusButtonCreate])


    const handlerOpenModal = () => {
        setOpen(!open);
    }

    return (
        <div className={styles.buttonCreate}>
            <Stack spacing={2} direction="row">
                {!statusButtonCreate &&
                <Button onClick={handlerOpenModal}
                        variant="contained"
                >
                    Создать
                </Button>
                }
                {statusButtonCreate &&
                <Button onClick={handlerOpenModal}
                        variant="contained"
                        color="success"
                >
                    Добавлен
                </Button>
                }
            </Stack>
        </div>
    );
}

export default ButtonCreate;