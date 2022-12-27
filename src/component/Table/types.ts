import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import {UsersObject} from "../../store/types";

export type PropsTable = {
    setSelectedRow: (params: string) => void;
    data: Array<UsersObject>;
    error: FetchBaseQueryError | SerializedError | undefined;
    isLoading: boolean;
    selectedRow: any;
}

export type ParamsSelectedRow = {
    id: string | null;
}