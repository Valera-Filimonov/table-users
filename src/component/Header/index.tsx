import ButtonCreate from './ButtonCreate';
import styles from './header.module.css'
import {Typography} from "@mui/material";

type PropsHeader = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Header = ({open, setOpen}: PropsHeader): JSX.Element => {
    return (
        <div className={styles.header}>
            <Typography className={styles.title} variant="h6" gutterBottom>Таблица пользователей</Typography>
            <ButtonCreate open={open} setOpen={setOpen}/>
        </div>
    );
}

export default Header;