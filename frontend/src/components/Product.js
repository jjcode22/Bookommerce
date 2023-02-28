import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded bookcard'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
        </Link>

        <Card.Text as='div'>
            <Rating value={product.rating} color='gold' text={`${product.numReviews} reviews`}/>
        </Card.Text>

        <Card.Text as='h3'>
        ₹ {product.Price}
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product