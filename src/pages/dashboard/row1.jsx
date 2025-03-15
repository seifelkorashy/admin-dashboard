
import { Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Chart from './chart'
import { data1, data2, data3, data4 } from './data'


export default function row1() {
  return (
    <Stack direction={"row"} gap={2} justifyContent={"space-between"} flexWrap={"wrap"} mt={2}>
        <Paper sx={{minWidth:"330px", padding:"20px", display:"flex", justifyContent:"space-between",  flexGrow:1}}>
                <Stack gap={1}>
                    <Email/>
                    <Typography variant="body1">12,360</Typography>
                    <Typography variant="body2">Total emails</Typography>
                </Stack>

                <Stack alignItems={"center"}>
                    <Chart data={data1}/>
                    +14%
                </Stack>
        </Paper>
        <Paper sx={{minWidth:"330px", padding:"20px", display:"flex", justifyContent:"space-between",  flexGrow:1}}>
                <Stack gap={1}>
                    <PointOfSale/>
                    <Typography variant="body1">431,225</Typography>
                    <Typography variant="body2">Sales obtained</Typography>
                </Stack>

                <Stack alignItems={"center"}>
                    <Chart data={data2}/>
                    +21%
                </Stack>
        </Paper>

        <Paper sx={{minWidth:"330px", padding:"20px", display:"flex", justifyContent:"space-between",  flexGrow:1}}>
                <Stack gap={1}>
                    <PersonAdd/>
                    <Typography variant="body1">32,440</Typography>
                    <Typography variant="body2">New Clients</Typography>
                </Stack>

                <Stack alignItems={"center"}>
                    <Chart data={data3}/>
                    +5%
                </Stack>
        </Paper>
        <Paper sx={{minWidth:"330px", padding:"20px", display:"flex", justifyContent:"space-between",  flexGrow:1}}>
                <Stack gap={1}>
                    <Traffic/>
                    <Typography variant="body1">1,325,134</Typography>
                    <Typography variant="body2">Traffic Received</Typography>
                </Stack>

                <Stack alignItems={"center"}>
                    <Chart data={data4}/>
                    +43%
                </Stack>
        </Paper>
    </Stack>
  )
}
