import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import styles from '../modal.module.css'
import { PropsButtonAdd } from "../types";

const ButtonAdd = ({
                       open,
                       setOpen,
                       status,
                       setStatus,

                       id,
                       email,
                       name,
                       lastName,
                       birthDate,

                       setId,
                       setName,
                       setLastName,
                       setBirthDate,
                       setEmail,

                       setErrorId,
                       setErrorEmail,
                       setErrorName,
                       setErrorLastName,
                       setErrorBirthDay,
                   }: PropsButtonAdd):
    JSX.Element => {

    const handlerCloseModal = () => {
        if (!/^(0|[1-9]\d*)$/g.test(id)) {
            setErrorId(true);
        } else {
            setErrorId(false);
        }
        if (!/^\S+@\S+\.\S+$/g.test(email)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        if (!/^[a-zA-Zа-яА-Я]+$/g.test(name)) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        if (!/^[a-zA-Zа-яА-Я]+$/g.test(lastName)) {
            setErrorLastName(true);
        } else {
            setErrorLastName(false);
        }
        if (!/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(birthDate)) {
            setErrorBirthDay(true);
        } else {
            setErrorBirthDay(false);
        }
        if (
            /^(0|[1-9]\d*)$/g.test(id) &&
            /^\S+@\S+\.\S+$/g.test(email) &&
            /^[a-zA-Zа-яА-Я]+$/g.test(name) &&
            /^[a-zA-Zа-яА-Я]+$/g.test(lastName) &&
            /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(birthDate)
        ) {
            setOpen(!open)
            setStatus(!status);

            setId('')
            setName('')
            setLastName('')
            setBirthDate('')
            setEmail('')
        }
    }

    return (
        <div className={styles.buttonAdd}>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerCloseModal}
                        variant="contained">
                    Добавить
                </Button>
            </Stack>
        </div>
    );
}

export default ButtonAdd;