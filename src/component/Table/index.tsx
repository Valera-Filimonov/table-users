import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid/DataGrid';
import {GridColDef} from '@mui/x-data-grid/models/colDef';
import {GridCellParams, GridValueGetterParams} from '@mui/x-data-grid/models/params';
import * as React from 'react';
import {ParamsSelectedRow, PropsTable} from "./types";
import {useState} from "react";

const Table = ({setSelectedRow, data, error, isLoading}: PropsTable): JSX.Element => {
    const [pageSize, setPageSize] = useState<number>(10)

    const handlerSelectedRow = (params: ParamsSelectedRow): boolean => {
        setSelectedRow(params);
        return true
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Имя',
            width: 150,
        },
        {
            field: 'lastName',
            headerName: 'Фамилия',
            width: 150,
        },
        {
            field: 'fullName',
            headerName: 'Полное имя',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.name || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
        },
        {
            field: 'birthDate',
            headerName: 'День рождения',
            width: 150,
        },
        {
            field: 'access',
            headerName: 'Доступ',
            width: 150,
            renderCell: (params: GridCellParams) => {
                if (params.value === true) {
                    return (
                        <div>&#9989;</div>
                    );
                } else {
                    return (
                        <div>&#10060;</div>
                    );
                }
            },
        },
    ];

    return (
        <>
            {data &&
            <Box sx={{height: 639}}>
                <DataGrid
                    rows={data}
                    error={error}
                    loading={isLoading}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    onRowClick={(params: ParamsSelectedRow) => {
                        if (params) {
                            handlerSelectedRow(params);
                            return true;
                        } else {
                            return false
                        }
                    }}
                    experimentalFeatures={{newEditingApi: true}}
                />
            </Box>}
        </>
    );
}

export default Table;