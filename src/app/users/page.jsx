import { Box } from '@mui/material'
import RandomUserTable from '../../components/tables/usersTable'


export default function Dashboard() {
  return (
<Box sx={{p: 3}}>
    <h1>Users</h1>
     <RandomUserTable/>
     </Box>
  )
 
}
