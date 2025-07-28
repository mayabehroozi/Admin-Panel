'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

interface UserRow {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export default function RandomUserTable() {
  const [rows, setRows] = useState<UserRow[]>([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.results.map((user: any, index: number) => ({
          id: index + 1,
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          age: user.dob.age,
        }));
        setRows(mapped);
      })
      .catch((err) => console.error('Error fetching random users:', err));
  }, []);

  const processRowUpdate = (newRow: UserRow, oldRow: UserRow) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? newRow : row));
    setRows(updatedRows);
    return newRow;
  };

  const handleDelete = (id: GridRowId) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const searchStr = filterText.toLowerCase();
    return (
      row.firstName.toLowerCase().includes(searchStr) ||
      row.lastName.toLowerCase().includes(searchStr) ||
      row.email.toLowerCase().includes(searchStr)
    );
  });

  const columns: GridColDef<UserRow>[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150, editable: true },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
    { field: 'email', headerName: 'Email', width: 220, editable: true },
    { field: 'age', headerName: 'Age', width: 90, type: 'number', editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton
          sx={{ color: 'rgb(42, 154, 244)' }}
          aria-label="delete"
          onClick={() => handleDelete(params.id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ height: 500, width: '100%' , borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', // سطح پایین سایه (مقدار بین 1 تا 24)
              bgcolor: '#fff', }}>
      <TextField
        placeholder="Search..."
        variant="outlined"
        size="small"
        sx={{ mb: 1, width: '300px' }}
        value={filterText}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        checkboxSelection
        disableRowSelectionOnClick
        loading={rows.length === 0}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(error) => console.error('Error updating row:', error)}
      />
    </Box>
  );
}
