import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../header.module.css'
import {useEffect} from "react";
import {PropsButtonChange} from "../types";

const ButtonChange = ({change,
                       selectedRow,
                       setChange,
                       statusButtonChange,
                       setStatusButtonChange
                       }: PropsButtonChange): JSX.Element => {

    useEffect(() => {
        if (statusButtonChange) {
            setTimeout(() => {
                setStatusButtonChange(false);
            }, 500)
        }
    }, [statusButtonChange])


    const handlerOpenModal = () => {
        if (selectedRow === null) {
            alert('Невозможно выполнить данное действие. ' +
                'В начале еобходимо выбрать пользователя!')
        } else {
            console.log(selectedRow)
            setChange(!change);
        }

        console.log(change)
    }

    return (
        <div className={styles.buttonCreate}>
            <Stack spacing={2} direction="row">
                {!statusButtonChange &&
                <Button onClick={handlerOpenModal}
                        variant="contained"
                >
                    Изменить
                </Button>
                }
                {statusButtonChange &&
                <Button onClick={handlerOpenModal}
                        variant="contained"
                        color="success"
                >
                    Изменен
                </Button>
                }
            </Stack>
        </div>
    );
}

export default ButtonChange;