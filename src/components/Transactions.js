import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'
import styled from '@emotion/styled'

const Container=styled(Box)`
  padding:10px;
`


export default function Transactions({transaction,setTransaction}) {
  return (
    <Container>
        <Typography variant='h5'>
            Transaction History
        </Typography>
        <Divider/>
        <List>
            {
                transaction.map(t=>(
                   <Transaction t={t} setTransaction={setTransaction} transaction={transaction}></Transaction>
                ))
            }
        </List>
    </Container>
  )
}
