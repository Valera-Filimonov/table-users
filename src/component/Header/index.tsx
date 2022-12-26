import ButtonCreate from './ButtonCreate';
import styles from './header.module.css'
import {Typography} from "@mui/material";
import { PropsHeader } from './types';

const Header = ({open, setOpen, status, setStatus}: PropsHeader): JSX.Element => {
    return (
        <div className={styles.header}>
            <Typography className={styles.title} variant="h6" gutterBottom>Таблица пользователей</Typography>
            <ButtonCreate open={open}
                          setOpen={setOpen}
                          status={status}
                          setStatus={setStatus}
            />
        </div>
    );
}

export default Header;