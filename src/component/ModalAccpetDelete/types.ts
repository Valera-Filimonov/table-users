export type PropsModalDeleteUser = {
    accept: boolean;
    setAccept: (accept: boolean) => void;
    statusButtonDelete: boolean;
    setStatusButtonDelete: (arg: boolean) => void;
    selectedRow: string | null;
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
    setSelectedRow: (selectedRow: null) => void;
}