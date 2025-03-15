import { Download } from '@mui/icons-material'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Row1 from './row1'
import Row2 from './row2'


export default function Dashboard() {
  return (
    <div>
      <Box sx={{textAlign:"right"}}>
      <Button variant="contained">
        <Download/>
        Download reports
      </Button>
      </Box>

      <Row1/>
      <Row2/>
    </div>
  )
}
