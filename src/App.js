import {useState} from "react";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import './style.css';
import { Box, styled } from "@mui/material";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transactions from "./components/Transactions";

const Component=styled(Box)`
  display:flex;
  width:800px;
  background:white;
  padding:10px;
  border-radius:20px;
  margin:auto;
  & > div{
    height : 85vh;
    width:50%;
    padding:10px;
  }
`

function App() {

  const [transaction,setTransaction]=useState([
    {id:0,text:"",amount:0},
  ])
  return (
    <>
      <NavBar></NavBar>
      <Component>
        <Box>
          <Main transaction={transaction}></Main>
          <ExpenseCard transaction={transaction}></ExpenseCard>
          <NewTransactions setTransaction={setTransaction} transaction={transaction}></NewTransactions>
        </Box>
        <Box>
          <Transactions transaction={transaction} setTransaction={setTransaction}></Transactions>
        </Box>
      </Component>
    </>
  );
}
export default App;
