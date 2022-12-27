export type PropsHeader = {
    open: boolean;
    setOpen: (open: boolean) => void;
    statusButtonCreate: boolean;
    setStatusButtonCreate: (statusButtonCreate: boolean) => void;
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

export type PropsButtonDelete = {
    selectedRow: string | null;
    statusButtonDelete: boolean;
    setStatusButtonDelete: (statusButtonDelete: boolean) => void;
    accept: boolean;
    setAccept: (accept: boolean) => void;
}