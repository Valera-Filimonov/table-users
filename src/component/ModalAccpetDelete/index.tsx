import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './modal.module.css'
import {PropsModalDeleteUser} from "./types";
import ButtonClose from './ButtonClose';
import ButtonDelete from "./ButtonDelete";

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

const ModalAccpetDelete = ({
                            accept,
                            setAccept,
                            selectedRow,
                            setSelectedRow,
                            statusButtonDelete,
                            setStatusButtonDelete,
                            }: PropsModalDeleteUser): JSX.Element => {

    const handlerOnClose = () => {
        setAccept(!accept)
    }
    console.log(selectedRow)
    return (
        <>
            <Modal
                open={accept}
                onClose={handlerOnClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title"
                                className={styles.title}
                                variant="h6"
                                component="h2"
                    >
                        Подвердите действие
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Уверены, что хотите удалить пользователя c id: {selectedRow?.id}
                    </Typography>
                    <div className={styles.boxButtonModal}>
                        <ButtonDelete accept={accept}
                                      setStatusButtonDelete={setStatusButtonDelete}
                                      statusButtonDelete={statusButtonDelete}
                                      setSelectedRow={setSelectedRow}
                                      setAccept={setAccept}
                                      selectedRow={selectedRow}
                        />
                        <ButtonClose accept={accept}
                                     setAccept={setAccept}
                                     setSelectedRow={setSelectedRow}
                        />
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default ModalAccpetDelete;