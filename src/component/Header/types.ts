type Row = {
    id: string | null;
    email: string;
    name: string;
    lastName: string;
    birthDate: string;
    access: boolean
}

type SelectedRow = {
    id: string | null;
    row: Row;
}

export type PropsHeader = {
    open: boolean;
    setOpen: (open: boolean) => void;
    change: boolean;
    setChange: (change: boolean) => void;
    statusButtonCreate: boolean;
    setStatusButtonCreate: (statusButtonCreate: boolean) => void;
    statusButtonChange: boolean;
    setStatusButtonChange: (statusButtonChange: boolean) => void;
    selectedRow: string | null;
    statusButtonDelete: boolean;
    setStatusButtonDelete: (statusButtonDelete: boolean) => void;
    accept: boolean;
    setAccept: (accept: boolean) => void;
}

export type PropsButtonCreate = {
    open: boolean;
    setOpen: (open: boolean) => void;
    statusButtonCreate: boolean;
    setStatusButtonCreate: (statusButtonCreate: boolean) => void;
}

export type PropsButtonChange = {
    selectedRow: SelectedRow;
    change: boolean;
    setChange: (open: boolean) => void;
    statusButtonChange: boolean;
    setStatusButtonChange: (statusButtonChange: boolean) => void;
}

export type PropsButtonDelete = {
    selectedRow: SelectedRow;
    statusButtonDelete: boolean;
    setStatusButtonDelete: (statusButtonDelete: boolean) => void;
    accept: boolean;
    setAccept: (accept: boolean) => void;
}