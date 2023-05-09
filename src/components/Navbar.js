import {Typography,styled} from '@mui/material';

const Header=styled(Typography)`
    margin:20px 0;
    font-size:34px;
    color:blue;
    text-transform:uppercase;
`

function NavBar(){
    return(
        <>
            <Header>Expense Tracker</Header>
        </>
    )
}

export default NavBar;