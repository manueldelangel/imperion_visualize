import {Box,  useMediaQuery } from '@mui/material';
import React, {useState} from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar"

const Dashboard = () => {
    console.log('hola')
  return (
    
    <Box width="100%" height="100%">
        <Box>
            {/* {<Navbar />} */}
            <Outlet />

        </Box>
    </Box>
  )
}

export default Dashboard;