import { Box, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const Container=styled(Box)`
    ${'' /* display:flex,
    flex-direction:row, */}
    &>div{
        flex:1,
        padding:10px
    }
`

export default function ExpenseCard({transaction}) {

    const amount=transaction.map(t=>(
        t=t.amount
    ))
    const income=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense=amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return (
    <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{color:"green"}}>$ {income}</Typography>
                </CardContent>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{color:"red"}}>$ {-1*expense}</Typography>
                </CardContent>
            </Card>
    </Container>
    )
}
