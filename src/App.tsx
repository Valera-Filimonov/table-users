import {useEffect, useState} from "react";
import Header from "./component/Header";
import ModalAddUser from "./component/ModalAddUser";
import Table from "./component/Table";
import ModalAccpetDelete from "./component/ModalAccpetDelete";
import {useGetUsersMutation} from "./store/userApi";
import styles from './app.module.css';
import ModalChangeUser from "./component/ModalChangeUser";

const App = (): JSX.Element => {
    const [getUser, {data = [], error, isLoading}] = useGetUsersMutation()

    const [open, setOpen] = useState<boolean>(false);
    const [change, setChange] = useState<boolean>(false);
    const [accept, setAccept] = useState<boolean>(false);
    const [statusButtonCreate, setStatusButtonCreate] = useState<boolean>(false);
    const [statusButtonChange, setStatusButtonChange] = useState<boolean>(false);
    const [statusButtonDelete, setStatusButtonDelete] = useState<boolean>(false);
    const [selectedRow, setSelectedRow] = useState<string | null>(null)

    useEffect( () => {
        setTimeout(() => {
            getUser('users')
        }, 2000)
    }, [statusButtonCreate, statusButtonChange, statusButtonDelete])

    return (
        <div className={styles.app}>
            <Header open={open}
                    setOpen={setOpen}
                    change={change}
                    setChange={setChange}
                    statusButtonChange={statusButtonChange}
                    setStatusButtonChange={setStatusButtonChange}
                    selectedRow={selectedRow}
                    statusButtonCreate={statusButtonCreate}
                    setStatusButtonCreate={setStatusButtonCreate}
                    statusButtonDelete={statusButtonDelete}
                    setStatusButtonDelete={setStatusButtonDelete}
                    accept={accept}
                    setAccept={setAccept}

            />
            <ModalAddUser open={open}
                          setOpen={setOpen}
                          statusButtonCreate={statusButtonCreate}
                          setStatusButtonCreate={setStatusButtonCreate}
            />
            <ModalChangeUser change={change}
                             selectedRow={selectedRow}
                             setChange={setChange}
                             statusButtonChange={statusButtonChange}
                             setStatusButtonChange={setStatusButtonChange}
            />
            <ModalAccpetDelete accept={accept}
                               selectedRow={selectedRow}
                               setSelectedRow={setSelectedRow}
                               setAccept={setAccept}
                               statusButtonDelete={statusButtonDelete}
                               setStatusButtonDelete={setStatusButtonDelete}
            />
            <Table setSelectedRow={setSelectedRow}
                   data={data}
                   error={error}
                   isLoading={isLoading}
            />
        </div>
    );
}

export default App;