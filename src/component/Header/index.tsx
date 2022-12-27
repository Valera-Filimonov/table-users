import ButtonCreate from './ButtonCreate';
import styles from './header.module.css'
import {Typography} from "@mui/material";
import {PropsHeader} from './types';
import ButtonDelete from "./ButtonDelete";
import ButtonChange from "./ButtonChange";

const Header = ({
                    open,
                    setOpen,
                    change,
                    setChange,
                    accept,
                    setAccept,
                    selectedRow,
                    statusButtonChange,
                    setStatusButtonChange,
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
                <ButtonChange change={change}
                              selectedRow={selectedRow}
                              setChange={setChange}
                              statusButtonChange={statusButtonChange}
                              setStatusButtonChange={setStatusButtonChange}
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