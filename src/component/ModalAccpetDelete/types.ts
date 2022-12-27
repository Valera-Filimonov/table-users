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

export type PropsModalDeleteUser = {
    accept: boolean;
    setAccept: (accept: boolean) => void;
    statusButtonDelete: boolean;
    setStatusButtonDelete: (arg: boolean) => void;
    selectedRow: SelectedRow;
    setSelectedRow: (selectedRow: string | null) => void;
}

export type PropsButtonClose = {
    accept: boolean;
    setAccept: (accept: boolean) => void;
    setSelectedRow: (selectedRow: string | null) => void;
}

export type PropsButtonDelete = {
    accept: boolean;
    setAccept: (accept: boolean) => void;
    statusButtonDelete: boolean;
    setStatusButtonDelete: (arg: boolean) => void;
    selectedRow: SelectedRow;
    setSelectedRow: (selectedRow: null) => void;
}