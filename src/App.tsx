import styles from './app.module.css';
import Header from "./component/Header";
import {useState} from "react";
import ModalAddUser from "./component/Modal";
import Table from "./component/Table";

const App = (): JSX.Element => {

    const [open, setOpen] = useState<boolean>(false);
    const [statusButtonCreate, setStatusButtonCreate] = useState<boolean>(false);
    const [statusButtonDelete, setStatusButtonDelete] = useState<boolean>(false)
    const [selectedRow, setSelectedRow] = useState<string | null>(null)

    return (
        <div className={styles.app}>
            <Header open={open}
                    setOpen={setOpen}
                    selectedRow={selectedRow}
                    statusButtonCreate={statusButtonCreate}
                    setStatusButtonCreate={setStatusButtonCreate}
                    statusButtonDelete={statusButtonDelete}
                    setStatusButtonDelete={setStatusButtonDelete}
            />
            <ModalAddUser open={open}
                          setOpen={setOpen}
                          statusButtonCreate={statusButtonCreate}
                          setStatusButtonCreate={setStatusButtonCreate}
            />
            <Table setSelectedRow={setSelectedRow}/>
        </div>
    );
}

export default App;