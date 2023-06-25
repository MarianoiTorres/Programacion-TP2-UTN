import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault()

        axios.post('http://localhost:3001/programacion/loginUser', user)
            .then(response => {
                if (response.data.length !== 0) {
                    const userJSON = JSON.stringify(response.data[0]);
                    localStorage.setItem('user', userJSON)
                    navigate('/')
                }
            })

        setUser({
            email: '',
            password: ''
        })
    }


    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <form onSubmit={login} className={style.form}>
                    
                    <input placeholder='Email' type="text" name="email" onChange={onChangeHandler} value={user.email} />

                    <input placeholder='Password' type="password" name="password" onChange={onChangeHandler} value={user.password} />

                    <button className={style.button} type="submit">Sign In</button>

                    <p>Don't have an account yet?</p>
                    
                    <Link to='/register'><button className={style.button} type='button'>Sign Up</button></Link>

                </form>

            </div>
        </div>
    )
}

export default Login