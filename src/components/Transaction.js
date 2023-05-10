import styled from '@emotion/styled'
import {  ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const Detail=styled(ListItem)`
    margin:10px;
`

const DelButton=styled(DeleteIcon)`
    cursor:pointer;
`

export default function Transaction({t,setTransaction,transaction}) {

    const deleteTransaction=(id)=>{
        console.log(id);
        setTransaction(transaction.filter(t => t.id !== id))
    }
    const visibility=t.id>0 ? 'visible' : 'hidden';
    const color=t.amount > 0 ? 'Green' : 'Tomato';
    return (
        <>      
            <Detail style={{background:`${color}`,color:'white',padding:'10px 10px 10px 10px',visibility:`${visibility}`}}>
                <ListItemIcon>
                    <DelButton onClick={()=>deleteTransaction(t.id)} sx={{":hover":{color:"#49f9ff"}}} />
                </ListItemIcon>
                <ListItemText>{t.text}</ListItemText>
                <ListItemText>{t.amount}</ListItemText>
            </Detail> 
        </>
    )
}
