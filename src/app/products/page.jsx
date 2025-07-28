'use client'


import { Box } from "@mui/material"
import CollapsibleProductTable from "../../components/tables/productTable"

export default function Dashboard() {
  return(
  <Box sx={{p:3}}>
  <h1>Product</h1>
  <CollapsibleProductTable/>
  </Box>)



}
