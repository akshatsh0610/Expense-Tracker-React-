import { useState } from "react";
import '../style.css'
function Navbar(){
    const [darkmode,setdarkmode]=useState(false);
    function fun(){
        if(darkmode===false)
        {
            document.body.classList.toggle('dark');
            document.querySelector('.logo').classList.toggle('dark');
            setdarkmode(true)
        }
        else{
            document.body.classList.remove('dark');
            document.querySelector('.logo').classList.remove('dark');
            setdarkmode(false)
        }
        console.log(darkmode)
    }
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