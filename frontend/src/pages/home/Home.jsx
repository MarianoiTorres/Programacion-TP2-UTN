import style from './Home.module.css'
import Header from '../../components/header/Header'
import Menu from '../../components/menu/Menu'
import Contenido from '../../components/contenido/Contenido'
import Barra from '../../components/barra/Barra'
import Footer from '../../components/footer/Footer'
import CarouselComponent from '../../components/carousel/Carousel'

const Home = () => {
    return (
        <div className={style.container}>

            <div className={style.header}>
                <Header />
            </div>

            <div className={style.menu}>
                <Menu />
            </div>

            <div className={style.carousel}>
                <CarouselComponent />
            </div>

            <div className={style.contenido}>
                <Contenido />
            </div>

            <div className={style.barra}>
                <Barra />
            </div>

            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Home