import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

export default function Product() {
  return <Paper sx={{ minWidth: "10rem", height: "15rem", display: 'flex', flexDirection: 'column', cursor: 'pointer', marginRight: '1rem' }}>
    <div style={{height: '70%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img alt="laptop" src="./images/sample-product-1.png" style={{width: '80%'}}/>
    </div>
    <div style={{width: '100%', height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography sx={{fontSize: '1.3rem', color: '#8e8e8e', fontWeight: 500}}>
        Laptop
      </Typography>
      <Typography sx={{fontSize: '1rem', color: '#9c9c9c'}}>
        42000+ Products
      </Typography>
    </div>
  </Paper>;
}
