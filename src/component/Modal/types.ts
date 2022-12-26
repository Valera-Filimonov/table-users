export type PropsModalAddUser = {
    open: boolean;
    setOpen: (open: boolean) => void;
    status: boolean;
    setStatus: (status: boolean) => void;
}

export type PropsButtonAdd = {
    open: boolean;
    setOpen: (open: boolean) => void;
    status: boolean;
    setStatus: (status: boolean) => void;

    id: string;
    email: string;
    name: string;
    lastName: string;
    birthDate: string;

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
}

export type PropsButtonClose = {
    open: boolean;
    setOpen: (open: boolean) => void;
}