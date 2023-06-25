import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.container}>
             <p className={style.p}>&copy; 2023. Todos los derechos reservados.</p>
        </div>
    )
}

export default Footer