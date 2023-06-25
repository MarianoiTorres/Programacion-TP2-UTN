import { useState } from "react"
import axios from 'axios'
import style from './Register.module.css'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const createNewUser = (event) => {
        event.preventDefault()

        axios.post('http://localhost:3001/programacion/createUser', user)

        setUser({
            name: '',
            surname: '',
            email: '',
            password: ''
        })

        navigate('/')
    }

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <form onSubmit={createNewUser} className={style.form}>
                    
                    <input placeholder="Name" type="text" name="name" onChange={onChangeHandler} value={user.name} />

                    <input placeholder="Surname" type="text" name="surname" onChange={onChangeHandler} value={user.surname} />
 
                    <input placeholder="Email" type="text" name="email" onChange={onChangeHandler} value={user.email} />
               
                    <input placeholder="Password" type="password" name="password" onChange={onChangeHandler} value={user.password} />

                    <button className={style.button} type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register