import React, { useState } from 'react'
import './Footer.css'
const Footer = () => {
    const [show, setShow] = useState(false)
    const showDevelopers= () =>{
        setShow(!show);
        console.log(show);
      }
  return (
    <div className='footer-wrapper'>
        <button onClick={showDevelopers}>Developers</button>
        {show && <ul className='creators'>
            <li ><a href="https://github.com/Nagema">Angélica</a></li>
            <li><a href="https://github.com/clauadri">Adrian</a></li>
            <li><a href="https://github.com/kinddddd">Alvaro</a></li>
            <li><a href="https://github.com/BillyVanHeel">Guillermo</a></li>
        </ul>}
    </div>
  )
}

export default Footer