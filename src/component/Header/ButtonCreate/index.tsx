import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../header.module.css'
import {useEffect} from "react";
import { PropsButtonCreate } from "../types";

const ButtonCreate = ({open, setOpen, status, setStatus}: PropsButtonCreate): JSX.Element => {

    useEffect(() => {
        if (status) {
            setTimeout(() => {
                setStatus(false);
            }, 500)
        }
    }, [status])


    const handlerOpenModal = () => {
        setOpen(!open);
        console.log(open)
    }

    return (
        <div className={styles.button}>
            <Stack spacing={2} direction="row">
                {!status &&
                <Button onClick={handlerOpenModal}
                        variant="contained"
                >
                    Создать
                </Button>
                }
                {status &&
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