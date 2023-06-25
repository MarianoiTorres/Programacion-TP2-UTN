import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import style from './Menu.module.css'
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Menu = () => {

    const [user, setUser] = useState({
        name: '',
        surname: ''
    })

    useEffect(() => {

        const userLocalstorage = localStorage.getItem('user')

        if (userLocalstorage) { // pregunto si hay algo en el localstorage
            if (user.name === '') { // pregunto si el usuario ya esta logeado
                setUser({
                    name: JSON.parse(userLocalstorage).name,
                    surname: JSON.parse(userLocalstorage).surname
                })
            }
        }
    }, [user])

    const closeSesion = () => { // limpio el localstorage y el estado

        localStorage.clear();

        setUser({
            name: '',
            surname: ''
        })
    }

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <div>
                    <Link to='/'><Button variant="dark" className={style.button}>Home</Button></Link>
                    <Link to='/products'><Button variant="dark" className={style.button}>Products </Button></Link>
                </div>
                <div className={style.usuarioLogeado}>
                    {
                        user.name !== '' && <h3>{user.name + ' ' + user.surname}</h3>
                    }
                    {
                        user.name === ''
                            ? <Link to='/login'><Button variant="dark" className={style.button}>Sign in</Button></Link>
                            : <Link to='/'><Button variant="dark" className={style.button} onClick={closeSesion}>Logout</Button></Link>
                    }


                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Menu