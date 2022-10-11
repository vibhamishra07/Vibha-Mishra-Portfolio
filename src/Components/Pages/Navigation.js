import React, { useState } from 'react'
import './Navigation.css';
import { Link } from 'react-scroll';
import { HomeOutlined } from '@mui/icons-material';
import {Person} from '@mui/icons-material';
import { School } from '@mui/icons-material';
import { Laptop } from '@mui/icons-material';
import { Code } from '@mui/icons-material';
import { ContactMail } from '@mui/icons-material';



export default function Navigation() {
    const [linkValue, setValue] = useState('');
    // const[sizef, setSize] =useState('medium');
  function changeLink () {
    if (window.innerWidth>990){
      setValue('home');
    }else{
      setValue('navigation');
    }
  }
  // const fontSetSize=()=>{
  //   return window.innerWidth>990?'large':'medium';
  // }
  return (
    <div className='container-nav' id="navigation">
        <nav>
            <ul className='nav-icons'>
               <li className='nav-icon-item'><Link to={linkValue} onClick={changeLink} spy={true} smooth={true} offset={5} duration={500}><HomeOutlined className='icons-nav' fontSize={'medium'} /></Link></li>
               <li className='nav-icon-item'><Link to='about'  spy={true} smooth={true} offset={5} duration={500}><Person className='icons-nav' fontSize={'medium'}/></Link></li>
               <li className='nav-icon-item'><Link to='education'  spy={true} smooth={true} offset={5} duration={500}><School className='icons-nav' fontSize={'medium'}/></Link></li>
               <li className='nav-icon-item'><Link to='skills'  spy={true} smooth={true} offset={5} duration={500}><Code className='icons-nav' fontSize={'medium'}/></Link></li>
               <li className='nav-icon-item'><Link to='profiles'  spy={true} smooth={true} offset={5} duration={500}><Laptop className='icons-nav' fontSize={'medium'}/></Link></li>
               <li className='nav-icon-item'><Link to='contact'  spy={true} smooth={true} offset={5} duration={500}><ContactMail className='icons-nav' fontSize={'medium'}/></Link></li>
            </ul>
        </nav>
    </div>
  )
}
