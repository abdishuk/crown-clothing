import React from 'react'
import './header.styles.scss'
import{Link} from 'react-router-dom'
import{ReactComponent as Logo} from '../../components/assets/crown.svg'
const header=()=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>

        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
            Shop
        </Link>
        <Link className='option' to='/shop'>
           Contact
        </Link>
        </div>

    </div>
)
export default header