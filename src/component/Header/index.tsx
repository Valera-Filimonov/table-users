import ButtonCreate from './ButtonCreate';
import styles from './header.module.css'
import {Typography} from "@mui/material";
import { PropsHeader } from './types';
import ButtonDelete from "./ButtonDelete";

const Header = ({open,
                 setOpen,
                 accept,
                 setAccept,
                 selectedRow,
                 statusButtonCreate,
                 setStatusButtonCreate,
                 statusButtonDelete,
                 setStatusButtonDelete
                }: PropsHeader): JSX.Element => {
    return (
        <div className={styles.header}>
            <Typography className={styles.title} variant="h6" gutterBottom>Таблица пользователей</Typography>
            <div className={styles.buttonGroup}>
                <ButtonDelete statusButtonDelete={statusButtonDelete}
                              setStatusButtonDelete={setStatusButtonDelete}
                              selectedRow={selectedRow}
                              accept={accept}
                              setAccept={setAccept}
                />
                <ButtonCreate open={open}
                              setOpen={setOpen}
                              statusButtonCreate={statusButtonCreate}
                              setStatusButtonCreate={setStatusButtonCreate}
                />
            </div>
        </div>
    );
}

export default Header;