import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import * as React from "react";
import { PropsButtonDelete } from "../types";
import {useDeleteUserMutation} from "../../../store/userApi";

const ButtonDelete = ({
                      accept,
                      setAccept,
                      setStatusButtonDelete,
                      statusButtonDelete,
                      setSelectedRow,
                      selectedRow,
                   }: PropsButtonDelete):
    JSX.Element => {
    const [deleteUser] = useDeleteUserMutation()

    const handlerCloseModal = async () => {
            setAccept(!accept);
            setStatusButtonDelete(!statusButtonDelete);
            await deleteUser(selectedRow.id);
            setSelectedRow(null);
    }

    return (
        <>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerCloseModal}
                        variant="contained"
                        color="error"
                >
                    Да
                </Button>
            </Stack>
        </>
    );
}

export default ButtonDelete;