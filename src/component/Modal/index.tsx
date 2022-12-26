import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './modal.module.css'
import ButtonAdd from "./ButtonAdd";
import ButtonClose from "./ButtonClose";

type PropsModalAddUser = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

const ModalAddUser = ({open, setOpen}: PropsModalAddUser): JSX.Element => {

    const handlerOnClose = () => {
        setOpen(!open)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handlerOnClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Добавить пользователя
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Какой-то текст
                    </Typography>
                    <div className={styles.boxButtonModal}>
                        <ButtonAdd open={open} setOpen={setOpen}/>
                        <ButtonClose open={open} setOpen={setOpen}/>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default ModalAddUser;