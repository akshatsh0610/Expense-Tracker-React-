import { useEffect, useState } from "react";
import '../style.css'
function Navbar(){
    const [darkmode,setdarkmode]=useState("light-theme");
    function fun(){
        if(darkmode==='light-theme')
        {
            document.querySelector('.logo').classList.toggle('dark');
            setdarkmode('dark-theme')
        }
        else{
            document.querySelector('.logo').classList.remove('dark');
            setdarkmode('light-theme')
        }
        console.log(darkmode)
    }
    useEffect(()=>{
        document.body.className=darkmode;
    },[darkmode])
    return(
        <header>
            <h1><i className="fa solid fa-coins logo"></i> Expense Tracker</h1>
            <input type="checkbox" className="checkbox" id="checkbox"/>
            <label for="checkbox" className="label">
                <i className="fas fa-moon"></i>
                <i className='fas fa-sun'></i>
                <div className='ball' onClick={fun}></div>
            </label>
        </header>
    )
}
export default Navbar;