import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";
import styles from "../header.module.css"
import {useEffect} from "react";
import {PropsButtonDelete} from "../types";

const ButtonDelete = ({statusButtonDelete,
                       setStatusButtonDelete,
                       selectedRow,
                       accept,
                       setAccept,
                        }: PropsButtonDelete): JSX.Element => {

    useEffect(() => {
        if (statusButtonDelete) {
            setTimeout(() => {
                setStatusButtonDelete(false);
            }, 500)
        }
    }, [statusButtonDelete])

    const handlerDeletedUser = () => {
        if (selectedRow === null) {
            alert("Невозможно выполнить данное действие." +
            "В начале еобходимо выбрать пользователя!")
        } else {
            setAccept(!accept);
        }
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