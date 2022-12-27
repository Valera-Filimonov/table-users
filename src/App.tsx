import {useEffect, useState} from "react";
import Header from "./component/Header";
import ModalAddUser from "./component/ModalAddUser";
import Table from "./component/Table";
import ModalAccpetDelete from "./component/ModalAccpetDelete";
import {useGetUsersMutation} from "./store/userApi";
import styles from './app.module.css';

const App = (): JSX.Element => {
    const [getUser, {data = [], error, isLoading}] = useGetUsersMutation()

    const [open, setOpen] = useState<boolean>(false);
    const [accept, setAccept] = useState<boolean>(false);
    const [statusButtonCreate, setStatusButtonCreate] = useState<boolean>(false);
    const [statusButtonDelete, setStatusButtonDelete] = useState<boolean>(false)
    const [selectedRow, setSelectedRow] = useState<string | null>(null)

    useEffect( () => {
        setTimeout(() => {
            getUser('users')
        }, 2000)
    }, [open, accept])

    return (
        <div className={styles.app}>
            <Header open={open}
                    setOpen={setOpen}
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