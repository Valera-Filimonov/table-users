import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid/DataGrid';
import {GridColDef} from '@mui/x-data-grid/models/colDef';
import {GridCellParams, GridValueGetterParams} from '@mui/x-data-grid/models/params';
import * as React from 'react';

const Table = (): JSX.Element => {

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Имя',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Фамилия',
            width: 150,
            editable: true,
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
            width: 150,
            editable: true,
        },
        {
            field: 'birthDate',
            headerName: 'День рождения',
            width: 150,
            editable: true,
        },
        {
            field: 'access',
            headerName: 'Доступ',
            width: 150,
            editable: true,
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

    const rows = [
        {id: 1, lastName: 'Snow', name: 'Jon', birthDate: '01/12/2022', access: true},
        {id: 2, lastName: 'Lannister', name: 'Cersei', birthDate: '02/12/2022', access: false},
        {id: 3, lastName: 'Lannister', name: 'Jaime', birthDate: '03/12/2022', access: true},
        {id: 4, lastName: 'Stark', name: 'Arya', birthDate: '03/12/2022', access: false},
        {id: 6, lastName: 'Melisandre', name: null, birthDate: '05/12/2022', access: true},
        {id: 7, lastName: 'Clifford', name: 'Ferrara', birthDate: '06/12/2022', access: false},
        {id: 8, lastName: 'Frances', name: 'Rossini', birthDate: '07/12/2022', access: false},
        {id: 9, lastName: 'Roxie', name: 'Harvey', birthDate: '08/12/2022', access: true},
        {id: 10, lastName: 'Roxie', name: 'Harvey', birthDate: '09/12/2022', access: false},
        {id: 11, lastName: 'Snow', name: 'Jon', birthDate: '09/12/2022', access: true},
        {id: 12, lastName: 'Lannister', name: 'Cersei', birthDate: '10/12/2022', access: true},
        {id: 13, lastName: 'Lannister', name: 'Jaime', birthDate: '11/12/2022', access: false},
    ];


    return (
        <>
            <Box sx={{height: 639, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{newEditingApi: true}}
                />
            </Box></>
    );
}

export default Table;