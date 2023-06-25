
import style from './Barra.module.css'
import Button from 'react-bootstrap/Button';

const Barra = () => {
    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <ul>
                    <a href='#about'><Button className={style.buttons} variant="light">About</Button></a>
                    <a href='#location'><Button className={style.buttons} variant="light"> Our Location</Button></a>
                    <a href='#cocina'><Button className={style.buttons} variant="light">Our Cousine</Button></a>
                </ul>
            </div>
        </div>
    )
}

export default Barra