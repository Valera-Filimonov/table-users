import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Checkbox} from '@mui/material';
import styles from './modal.module.css'
import ButtonAdd from './ButtonAdd';
import ButtonClose from './ButtonClose';
import {ChangeEvent, useState} from "react";

type PropsModalAddUser = {
    open: boolean;
    setOpen: (open: boolean) => void;
    status: boolean;
    setStatus: (status: boolean) => void;
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

const ModalAddUser = ({open, setOpen, status, setStatus}: PropsModalAddUser): JSX.Element => {

    const [id, setId] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('')
    const [access, setAccess] = useState<boolean>(false);

    const [errorId, setErrorId] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorLastName, setErrorLastName] = useState<boolean>(false);
    const [errorBirthDate, setErrorBirthDate] = useState<boolean>(false);

    const handlerOnChangeId = (event: ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    }
    const handlerOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        console.log(email)
    }
    const handlerOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log(name)
    }
    const handlerOnChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
        console.log(lastName)
    }
    const handlerOnChangeBirthDate = (event: ChangeEvent<HTMLInputElement>) => {
        setBirthDate(event.target.value);
        console.log(birthDate)
    }
    const handlerOnChangeAccess = (event: ChangeEvent<HTMLInputElement>) => {
        setAccess(event.target.checked)
        console.log(access)
    }

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
                    <Typography id="modal-modal-title"
                                className={styles.title}
                                variant="h6"
                                component="h2"
                    >
                        Добавить пользователя
                    </Typography>
                    <div className={styles.input}>
                        <TextField id="outlined-basic"
                                   fullWidth={true}
                                   label="id"
                                   variant="outlined"
                                   value={id}
                                   onChange={handlerOnChangeId}
                                   error={errorId}
                        />
                    </div>
                    <div className={styles.input}>
                        <TextField id="outlined-basic"
                                   fullWidth={true}
                                   label="email"
                                   variant="outlined"
                                   onChange={handlerOnChangeEmail}
                                   error={errorEmail}
                        />
                    </div>
                    <div className={styles.input}>
                        <TextField id="outlined-basic"
                                   fullWidth={true}
                                   label="Имя"
                                   variant="outlined"
                                   onChange={handlerOnChangeName}
                                   error={errorName}
                        />
                    </div>
                    <div className={styles.input}>
                        <TextField id="outlined-basic"
                                   fullWidth={true}
                                   label="Фамилия"
                                   variant="outlined"
                                   onChange={handlerOnChangeLastName}
                                   error={errorLastName}
                        />
                    </div>
                    <div className={styles.input}>
                        <TextField id="outlined-basic"
                                   fullWidth={true}
                                   label="Дата рождения"
                                   variant="outlined"
                                   onChange={handlerOnChangeBirthDate}
                                   error={errorBirthDate}
                        />
                    </div>
                    <div className={styles.checkBox}>
                        <Checkbox checked={access}
                                  onChange={handlerOnChangeAccess}
                                  aria-label={'Доступ'}
                        />
                        <Typography className={styles.titleCheckBox}
                                    id="modal-modal-title"
                                    variant="body1"
                        >
                            Доступ
                        </Typography>
                    </div>

                    <div className={styles.boxButtonModal}>
                        <ButtonAdd open={open}
                                   setOpen={setOpen}

                                   status={status}
                                   setStatus={setStatus}

                                   id={id}
                                   email={email}
                                   name={name}
                                   lastName={lastName}
                                   birthDate={birthDate}

                                   setId={setId}
                                   setEmail={setEmail}
                                   setName={setName}
                                   setLastName={setLastName}
                                   setBirthDate={setBirthDate}


                                   setErrorId={setErrorId}
                                   setErrorEmail={setErrorEmail}
                                   setErrorName={setErrorName}
                                   setErrorLastName={setErrorLastName}
                                   setErrorBirthDay={setErrorBirthDate}
                        />
                        <ButtonClose open={open} setOpen={setOpen}/>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default ModalAddUser;