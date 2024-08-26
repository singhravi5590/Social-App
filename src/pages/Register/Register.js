import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <div className='cards'>
            <div className='right'>
                <h1>Register</h1>
                <form>
                    <input type='text' placeholder='Username'/>
                    <input type='text' placeholder='Email'/>
                    <input type='Password' placeholder='Password'/>
                    <input type='text' placeholder='Name'/>
                    <button>Register</button>
                </form>
            </div>
            <div className='left'>
                <h1>Ravi Singh</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam perferendis facere harum cumque sapiente sequi labore dolor. Odio, autem minima ad quos quidem a consectetu
                </p>
                <span>Do you have an account</span>
                <Link to={'/login'}><button>Login</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Register