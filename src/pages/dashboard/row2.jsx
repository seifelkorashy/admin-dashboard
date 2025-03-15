import { Box, Paper, Stack, Typography, useTheme, IconButton, Button } from '@mui/material'
import Line from './line'
import { transactions } from './data'
import { Download, InstallDesktop, InstallMobile } from '@mui/icons-material'


let recentTransactions = transactions.map((item) => {
    return(
        <Paper key={item.txId} sx={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px"}}>
        <Box>
            <Typography variant="body1">{item.txId}</Typography>
            <Typography variant="body1">{item.user}</Typography>
        </Box>
        <Typography variant="body1">{item.date}</Typography>
        <Typography variant="body1" sx={{background:"red", padding:"5px"}}>${item.cost}</Typography>
        </Paper>

    )
})
export default function row2() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme()
  return (
    <Stack direction={"row"} gap={2}  flexWrap={"wrap"} mt={2}>
        <Paper sx={{flexGrow:1}}>
        <Stack direction={"row"} justifyContent={"space-between"} padding={"10px"}>
            <Box>
                <Typography variant="body2" color={theme.palette.secondary.main}>revenue generated</Typography>
                <Typography variant="body2">$60,340,30</Typography>
            </Box>
            <Button >
                <Download/>
            </Button>
        </Stack>
        <Line/>
        </Paper>

        <Stack sx={{ maxHeight:"300px",overflow:"auto", flexGrow:1, gap:"10px" , Width:"350px"}}>
        <Paper>
            <Typography variant="body1" sx={{padding:"20px"}} color={theme.palette.secondary.main}>
                last transactions
            </Typography>
        </Paper>
            {recentTransactions}
        </Stack>
    </Stack>
  )
}
