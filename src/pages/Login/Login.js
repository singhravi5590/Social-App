import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className='cards'>
            <div className='left'>
                <h1>Hello World.</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam perferendis facere harum cumque sapiente sequi labore dolor. Odio, autem minima ad quos quidem a consectetu
                </p>
                <span>Don't you have an account?</span>
                <Link to={'/register'}><button>Register</button></Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type='text' placeholder='Username'/>
                    <input type='Password' placeholder='Password'/>
                    <button>Login </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login