import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {TextField,Typography, Button, Box} from '@mui/material'
import ExtensionIcon from '@mui/icons-material/Extension'
import {notifyError,notifyInfo,notifySuccess,notifyWarning} from '../../component/Notify'
function Login() {
    const navigate = useNavigate()
    const [formLogin,setFormLogin] = useState({
        username:'',
        password:'',
    })

    const handleOnChange = (e) => {
        const {name,value} = e.target
        setFormLogin({...formLogin,[name]:value})
    }

    const submitLogin = () => {
        if(!formLogin['username']){
            return notifyWarning('กรุณากรอก ชื่อผู้ใช้งาน')
        }
        if(!formLogin['password']){
            return notifyWarning('กรุณากรอก รหัสผ่าน')
        }

        login()
    }

    const login = () => {
        console.log('เข้าสู่ระบบ')
    }

  return (
    <Box
        sx={{
            background:'#0C356A',
            width:'100%',
            minHeight:'100vh',
            height:'100%',
            display:'flex',
            justifyContent:'center',
        }}
    >
         <Box
            sx={{
                background:'#fff',
                width:'calc(250px + 5vw)',
                height:'100%',
                borderRadius:'0.5rem',
                padding: '1rem',
                marginTop:'4rem',
            }}
         >
            <Box
                sx={{
                    position:'relative',
                    height:'4rem',
                }}
            >
                <ExtensionIcon 
                    sx={{
                        position:'absolute',
                        right:0,
                        top:'50%',
                        transform: 'translateY(-50%) rotate(30deg)',
                        fontSize:'3.5rem',
                        color:'#000',
                    }}
                />
            </Box>
            <Typography 
                component='p'
                variant='p'
                color='primary'
                sx={{
                    fontSize:'calc(15px + 1vw)',
                    marginBottom:'1rem',
                    textAlign:'center'
                }}
            >
                เข้าสู่ระบบ
            </Typography>
            <TextField 
                label="ชื่อผู้ใช้" 
                variant="outlined" 
                size='small'
                fullWidth
                sx={{marginBottom:'1.5rem'}}
                name='username'
                value={formLogin['username']}
                onChange={handleOnChange}
            />
            <TextField 
                label="รหัสผ่าน" 
                variant="outlined" 
                size='small'
                fullWidth
                sx={{marginBottom:'1.5rem'}}
                name='password'
                value={formLogin['password']}
                onChange={handleOnChange}
            />
            <Typography 
                component='p'
                variant='p'
                color='primary'
                sx={{
                    textAlign:'end',
                    marginBottom:'1rem',
                    cursor:'pointer'
                }}
                onClick={() => {navigate('/register')}}
            >
                สมัครสมาชิก
            </Typography>
            <Button
                variant='contained' 
                color="primary"
                fullWidth
                sx={{margin:'2rem 0'}}
                onClick={() => submitLogin()}
            >
                เข้าสู่ระบบ
            </Button>
        </Box>
    </Box>
  )
}

export default Login