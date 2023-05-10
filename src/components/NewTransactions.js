import { Box, Button, TextField, Typography, styled } from '@mui/material'
import {useState} from 'react'

const Container=styled(Box)`
    display:flex;
    flex-direction:column;
    & > h5 , & > div , & > button{
        margin-top:30px
    }

`

export default function NewTransactions({setTransaction,transaction}) {
  const [text,setText]=useState('');
  const [amt,setAmt]=useState(0);
  const addTransaction=()=>{
    // console.log('hi')
    const t={
      id:transaction.length,
      text:text,
      amount:+amt
    }
    setTransaction(prevState=>[t,...prevState])
  }
  return (
    <Container>
        <Typography variant='h5'>
            New Transactions
        </Typography>
        <TextField label="Enter expense" onChange={(e)=>setText(e.target.value)}/>
        <TextField label="Enter amount" onChange={(e)=>setAmt(e.target.value)}/>
        <Button variant='contained' onClick={addTransaction}>Add Transaction</Button>
    </Container>
  )
}
