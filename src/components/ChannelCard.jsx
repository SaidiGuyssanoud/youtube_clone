import React from 'react';
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box 
        sx={{
            boxShadow: "none",
            borderRadius: "20px",
        }}
    
    >
        <Link to={`/Channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display:"flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }}>
                <CardMedia />
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard