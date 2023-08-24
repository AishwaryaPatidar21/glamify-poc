import { Box, Grid } from "@mui/material";
import React from "react";
import PieChartjs from "./PieChartComponent";
import ColumnChartjs from "./Columnchart";
const Homepage=()=>{
return(<>

<Box sx={{  }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
         
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={6}>
            <ColumnChartjs/>
        </Grid>
        <Grid item xs={6}>
            <PieChartjs/>
        </Grid>
      </Grid>
    </Box>
</>)
}
export default Homepage
