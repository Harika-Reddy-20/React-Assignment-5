import React from 'react'
import { Link } from 'react-router-dom'
// import './Style.css'


const Navigator = () => {
    return (
        <>
           <div style={{width: 1000, height: 100, backgroundColor: 'blue', marginLeft:'200px',paddingTop: '30px', textAlign:'center'}}>
               <Link to = '/Home'><button>Home</button></Link>
               <Link to = '/Student'><button>Student</button></Link>
               <Link to = '/Contactus'><button>Contact Us</button></Link>
           </div>
        </>
    )
}

export default Navigator