import './app.module.css';
import Header from "./component/Header";
import {useState} from "react";
import ModalAddUser from "./component/Modal";

const App = (): JSX.Element => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <Header open={open} setOpen={setOpen}/>
            <ModalAddUser open={open} setOpen={setOpen}/>
        </>
    );
}

export default App;