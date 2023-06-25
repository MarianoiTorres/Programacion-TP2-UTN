import { useEffect, useState } from 'react'
import style from './Detail.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Detail = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                setProduct(response.data.meals)
            })
    }, [id])

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <h1>{product[0]?.strMeal}</h1>
                <div className={style.containerInfo}>
                    <div className={style.info}>
                        <p><b>Category:</b> {product[0]?.strCategory}</p>
                        <p><b>Area:</b> {product[0]?.strArea}</p>
                        <p><b>Recipe:</b> {product[0]?.strInstructions}</p>
                    </div>
                    <img className={style.image} src={product[0]?.strMealThumb} />
                </div>
            </div>
        </div>
    )
}

export default Detail