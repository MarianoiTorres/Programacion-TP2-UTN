import style from './Card.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const CardComponent = ({id, name, category, image, area}) => {
    return (
        <Card style={{ width: '18rem' }} bg="dark">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className={style.text}>{name}</Card.Title>
                <Link to={`/${id}`}><Button variant="light" className={style.textButton}>Details</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default CardComponent