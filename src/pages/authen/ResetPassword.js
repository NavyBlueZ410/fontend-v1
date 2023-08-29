import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import {TextField,Typography, Button, Box} from '@mui/material'
import ExtensionIcon from '@mui/icons-material/Extension'
import {notifyError,notifyInfo,notifySuccess,notifyWarning} from '../../component/Notify'
import * as api from '../../services/api'
import Loading from '../../component/Loading'


function ResetPassword() {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState('')

    const submitEmail = () => {
        if(!email){
            return notifyWarning('กรุณากรอก Email')
        }

        sendMailResetPassword()
    }

    const sendMailResetPassword = async() => {
        // console.log('ส่ง Email')
        setLoading(true)
        let res = await api.sendMailResetPassword(email)
        setLoading(false)
        if(res){
            if(res['data']['code'] === 200 ){
                notifySuccess(res['data']['message'])
                setEmail('')
            }else{
            notifyWarning(res['data']['message'])
            }
        }else{
            notifyError('ไม่ตอบสนอง')
        }
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
        {
            loading ? 
            <Loading/> : null
        }
        
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
                แจ้งลืมรหัสผ่าน
            </Typography>
            <TextField 
                label="ชื่อผู้ใช้" 
                variant="outlined" 
                size='small'
                fullWidth
                sx={{marginBottom:'1.5rem'}}
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button
                variant='contained' 
                color="primary"
                fullWidth
                sx={{margin:'1rem 0'}}
                onClick={() => submitEmail()}
            >
                ส่ง Email
            </Button>
        </Box>
    </Box>
  )
}

export default ResetPassword