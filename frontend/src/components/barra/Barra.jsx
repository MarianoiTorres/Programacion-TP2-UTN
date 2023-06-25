
import style from './Barra.module.css'
import Button from 'react-bootstrap/Button';

const Barra = () => {
    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <ul>
                    <Button className={style.buttons} variant="light"><a href='#about'>About</a></Button>
                    <Button className={style.buttons} variant="light"> <a href='#location'>Our Location</a></Button>
                    <Button className={style.buttons} variant="light"><a href='#cocina'>Our Cousine</a></Button>
                </ul>
            </div>
        </div>
    )
}

export default Barra