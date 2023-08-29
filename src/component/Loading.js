import React from 'react'
import {Box} from '@mui/material';
import {Puff} from 'react-loader-spinner'

function Loading() {
  return (
    <Box
        sx={{
            position:'absolute',
            top:0,
            left:0, 
            width:'100%',
            height:'100vh',           
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}
    >
        <Puff
                height="80"
                width="80"
                radius={1}
                color="#279EFF"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
        />
    </Box>
  )
}

export default Loading