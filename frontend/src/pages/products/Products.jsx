import { useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios'
import CardComponent from '../../components/card/Card'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => {
                setProducts(response.data.meals)
                console.log(response.data.meals);
            })
    }, [])

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                
                    {
                        products.length !== 0 && products.map(product => {
                            return (
                                <CardComponent
                                    key={product.idMeal}
                                    id={product.idMeal}
                                    name={product.strMeal}
                                    category={product.strCategory}
                                    image={product.strMealThumb}
                                    area={product.strArea}
                                />
                            )
                        })
                    }
                
            </div>
        </div>
    )
}

export default Products