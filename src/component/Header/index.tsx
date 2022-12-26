import ButtonCreate from './Button';
import styles from './header.module.css'
import {Typography} from "@mui/material";

const Header = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <Typography className={styles.title} variant="h6" gutterBottom>Таблица пользователей</Typography>
            <ButtonCreate/>
        </div>
    );
}

export default Header;