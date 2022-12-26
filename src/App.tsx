import styles from './app.module.css';
import Header from "./component/Header";
import {useState} from "react";
import ModalAddUser from "./component/Modal";
import Table from "./component/Table";

const App = (): JSX.Element => {

    const [open, setOpen] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false)

    return (
        <div className={styles.app}>
            <Header open={open}
                    setOpen={setOpen}
                    status={status}
                    setStatus={setStatus}
            />
            <ModalAddUser open={open}
                          setOpen={setOpen}
                          status={status}
                          setStatus={setStatus}
            />
            <Table />
        </div>
    );
}

export default App;