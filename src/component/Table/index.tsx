import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid/DataGrid';
import {GridColDef} from '@mui/x-data-grid/models/colDef';
import {GridCellParams, GridValueGetterParams} from '@mui/x-data-grid/models/params';
import * as React from 'react';
import {ParamsSelectedRow, PropsTable} from "./types";

const Table = ({setSelectedRow}: PropsTable): JSX.Element => {

    const handlerSelectedRow = (params: ParamsSelectedRow): boolean => {
        setSelectedRow(params.id);
        console.log(params.id)
        return true
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Имя',
            width: 150,
            //позволяет редактировать ячейки
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
            width: 250,
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
        {
            id: 1,
            lastName: 'Snow',
            name: 'Jon',
            email: "JonCenaOfficial@google.com",
            birthDate: '01/12/1976',
            access: true
        },
        {
            id: 2,
            lastName: 'Lannister',
            name: 'Cersei',
            email: "Willy-Wonka@chocolate-shop.com",
            birthDate: '02/12/2022',
            access: false
        },
        {id: 3, lastName: 'Potter', name: 'Jaime', email: "potate@yandex.com", birthDate: '24/11/2022', access: true},
        {id: 4, lastName: 'Stark', name: 'Tony', email: "IronMan@mail.ru", birthDate: '29/06/1970', access: false},
        {
            id: 6,
            lastName: 'Melisandre',
            name: 'Piter',
            email: "super-puper@yahoo.com",
            birthDate: '05/10/1992',
            access: true
        },
        {
            id: 7,
            lastName: 'Clifford',
            name: 'Ferrara',
            email: "Ferrari@google.com",
            birthDate: '06/12/2022',
            access: false
        },
        {
            id: 8,
            lastName: 'Frances',
            name: 'Rossini',
            email: "Love_Paris@adobe.com",
            birthDate: '07/10/2022',
            access: false
        },
        {id: 9, lastName: 'Adrian', name: 'Harvey', email: "CatGirl@yandex.ru", birthDate: '08/12/1997', access: true},
        {
            id: 10,
            lastName: 'Roxie',
            name: 'Harvey',
            email: "fskirling2p@adobe.com",
            birthDate: '09/12/2002',
            access: false
        },
        {
            id: 11,
            lastName: 'Snow',
            name: 'Jon',
            email: "Nagibator3000@outlook.com",
            birthDate: '01/11/2002',
            access: true
        },
        {
            id: 12,
            lastName: 'Lannister',
            name: 'Cersei',
            email: "Lannister1999@google.com",
            birthDate: '10/09/1999',
            access: true
        },
        {
            id: 13,
            lastName: 'Lannister',
            name: 'Jaime',
            email: "MrBeast@yandex.ru",
            birthDate: '07/06/2000',
            access: false
        },
        {
            id: 14,
            lastName: 'Parker',
            name: 'Piter',
            email: "SpiderMan@yahoo.com",
            birthDate: '19/08/1986',
            access: false
        },
        {
            id: 16,
            lastName: 'Jeffrey',
            name: 'Thomas',
            email: "Thomas-Jeffrey1956@yahoo.com",
            birthDate: '09/07/1956',
            access: false
        },
    ];


    return (
        <>
            <Box sx={{height: 639}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
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
            </Box></>
    );
}

export default Table;