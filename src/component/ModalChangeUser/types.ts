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

export type PropsModalChangeUser = {
    initialId: string | undefined;
    change: boolean;
    setChange: (change: boolean) => void;
    statusButtonChange: boolean;
    setStatusButtonChange: (statusButtonChange: boolean) => void;
    selectedRow: SelectedRow;
}

export type PropsButtonAdd = {
    change: boolean;
    setChange: (open: boolean) => void;
    statusButtonChange: boolean;
    setStatusButtonChange: (statusButtonChange: boolean) => void;

    id: string;
    email: string;
    name: string;
    lastName: string;
    birthDate: string;
    access: boolean;

    setId: (arg: string) => void;
    setEmail: (arg: string) => void;
    setName: (arg: string) => void;
    setLastName: (arg: string) => void;
    setBirthDate: (arg: string) => void;

    setErrorId: (arg: boolean) => void;
    setErrorEmail: (arg: boolean) => void;
    setErrorName: (arg: boolean) => void;
    setErrorLastName: (arg: boolean) => void;
    setErrorBirthDay: (arg: boolean) => void;
    initialId: string;
}

export type PropsButtonClose = {
    change: boolean;
    setChange: (change: boolean) => void;

    setId: (arg: string) => void;
    setEmail: (arg: string) => void;
    setName: (arg: string) => void;
    setLastName: (arg: string) => void;
    setBirthDate: (arg: string) => void;
    setAccess: (arg: boolean) => void;
}