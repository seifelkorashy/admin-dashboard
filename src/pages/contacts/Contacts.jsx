import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { columns, rows } from './data';
import { GridToolbar } from '@mui/x-data-grid'; 

export default function Contacts() {
  return (
      <Box sx={{ height: 400, width: '100%' }}>
        <h1>Contacts</h1>
        <DataGrid
        slots={{ toolbar: GridToolbar }} 
          rows={rows}
          //@ts-ignore
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </Box>
  )
}
