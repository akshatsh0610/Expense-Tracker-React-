import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Balancetext=styled(Typography)`
    font-size:25px;
    margin-bottom:20px;
`

export default function Main({transaction}) {
  const amount=transaction.map(t=>(
    t=t.amount
  ))
  const totalamt=amount.reduce((amount,item)=>(amount+=item),0).toFixed(2);
  return (
    <Box>
        <Balancetext>Balance : ${totalamt}</Balancetext>
    </Box>
  )
}
