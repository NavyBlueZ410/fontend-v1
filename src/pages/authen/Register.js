import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import {TextField,Typography, Button, Box, Grid, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import {notifyError,notifyInfo,notifySuccess,notifyWarning} from '../../component/Notify'
import * as api from '../../services/api'

function Register() {
  const navigate = useNavigate()
  const [formRegister,setFormRegister] = useState({
    username:'',
    password:'',
    confirm_password:'',
    pname:'',
    fname:'',
    lname:'',
    nickname:'',
    phone:'',
    status_user:''
  })

  const handleOnChange = (e) => {
    const {name,value} = e.target
    setFormRegister({...formRegister,[name]:value})
  }

  const submitRegister = () => {
    if(!formRegister['username']){
      return notifyWarning('กรุณากรอก ชื่อผู้ใช้งาน')
    }
    if(!formRegister['password']){
        return notifyWarning('กรุณากรอก รหัสผ่าน')
    }
    if(!formRegister['confirm_password']){
      return notifyWarning('กรุณากรอก ยืนยันรหัสผ่าน')
    }
    if(formRegister['password'] !== formRegister['confirm_password']){
      return notifyWarning('รหัสผ่านไม่ตรงกัน')
    }
    if(!formRegister['pname']){
      return notifyWarning('กรุณากรอก คำนำหน้าชื่อ')
    }
    if(!formRegister['fname']){
      return notifyWarning('กรุณากรอก ชื่อ')
    }
    if(!formRegister['lname']){
      return notifyWarning('กรุณากรอก นามสกุล')
    }
    if(!formRegister['nickname']){
      return notifyWarning('กรุณากรอก ชื่อเล่น')
    }
    if(!formRegister['phone']){
      return notifyWarning('กรุณากรอก โทรศัพท์')
    }
    if(!formRegister['status_user']){
      return notifyWarning('กรุณากรอก สถานะผู้ใช้งาน')
    }

    register()
  }

  const register = async() => {
    let res = await api.createUser(formRegister)
    if(res){
      if(res['data']['code'] === 200 ){
        notifySuccess(res['data']['message'])
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
            display:'flex',
            justifyContent:'center',
            background:'#0C356A',
            width:'100%',
            minHeight:'100vh',
            height:'100%'
        }}
    >
         <Box
            sx={{
                background:'#fff',
                maxWidth:'calc(550px + 5vw)',
                borderRadius:'0.5rem',
                padding: '1rem',
                height:'100%',
                margin:'5rem 0'
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
                สมัครสมาชิก
            </Typography>
            <Grid container spacing={2} sx={{marginBottom:'1rem'}}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField 
                      label="ชื่อผู้ใช้" 
                      variant="outlined" 
                      size='small'
                      fullWidth
                      name='username'
                      value={formRegister['username']}
                      onChange={handleOnChange}
                  />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom:'1rem'}}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField 
                      label="รหัสผ่าน" 
                      variant="outlined" 
                      size='small'
                      fullWidth
                      name='password'
                      value={formRegister['password']}
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField 
                      label="ยืนยันรหัสผ่าน" 
                      variant="outlined" 
                      size='small'
                      fullWidth
                      name='confirm_password'
                      value={formRegister['confirm_password']}
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl 
                    size="small"
                    fullWidth
                  >
                    <InputLabel 
                    >
                      คำนำหน้าชื่อ
                    </InputLabel>
                    <Select
                      label="คำนำหน้าชื่อ"
                      name='pname'
                      value={formRegister['pname'] || ''}
                      onChange={handleOnChange}
                    >
                      <MenuItem value="">
                        คำนำหน้าชื่อ
                      </MenuItem>
                      <MenuItem value={'นาย'}>นาย</MenuItem>
                      <MenuItem value={'นางสาว'}>นางสาว</MenuItem>
                      <MenuItem value={'นาง'}>นาง</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField 
                      label="ชื่อ" 
                      variant="outlined" 
                      size='small'
                      fullWidth
                      name='fname'
                      value={formRegister['fname']}
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField 
                      label="นามสกุล" 
                      variant="outlined" 
                      size='small'
                      fullWidth
                      name='lname'
                      value={formRegister['lname']}
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField 
                      label="ชื่อเล่น" 
                      variant="outlined" 
                      size='small'
                      fullWidth
                      name='nickname'
                      value={formRegister['nickname']}
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField 
                      label="เบอร์โทรศัพท์" 
                      variant="outlined" 
                      size='small'
                      fullWidth
                      name='phone'
                      value={formRegister['phone']}
                      onChange={handleOnChange}
                  />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom:'1rem'}}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl 
                    size="small"
                    fullWidth
                  >
                    <InputLabel 
                    >
                      สถานะผู้ใช้งาน
                    </InputLabel>
                    <Select
                      label="สถานะผู้ใช้งาน"
                      name='status_user'
                      value={formRegister['status_user'] || ''}
                      onChange={handleOnChange}
                    >
                      <MenuItem value="">
                        สถานะผู้ใช้งาน
                      </MenuItem>
                      <MenuItem value={'a'}>ผู้ดูแลระบบสูงสุด</MenuItem>
                      <MenuItem value={'u'}>ผู้ใช้ทั่วไป</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
            </Grid>
            <Button
                variant='contained' 
                color="primary"
                fullWidth
                sx={{margin:'2rem 0'}}
                onClick={() => submitRegister()}
            >
                สมัครสมาชิก
            </Button>
        </Box>
    </Box>
  )
}

export default Register