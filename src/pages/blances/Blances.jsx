import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { columns, rows } from './data';

export default function Blances() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
        <h1>invoices</h1>
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
