import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col,Image, ListGroup,Card, Button, ListGroupItem,FormControl} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useState, useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({match}) => {
  const navigate= useNavigate()
  const params = useParams()
  const id = params.id
  const productDetails = useSelector(state => state.productDetails)

  const {loading,error, product} = productDetails
  const dispatch = useDispatch()
  const [qty,setQty] = useState(1)

  useEffect(() => {
    dispatch(listProductDetails(id))
  },[dispatch,match])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)

  }

  
  return (
    <>
    <Link className='btn btn-light my-3' to='/'> Go Back</Link>
    {loading ? <Loader/>: error? <Message variant='danger'>{error}</Message>:(<Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
      </Col>
      <Col>
      <ListGroup variant='flush'>
        <ListGroupItem>
          <h2>{product.name}</h2>
        </ListGroupItem>
        <ListGroupItem>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color='gold'/>
        </ListGroupItem>
        <ListGroupItem>
          Author: {product.author}
        </ListGroupItem>
        <ListGroupItem>
          Price: ₹ {product.Price} 
        </ListGroupItem>
        <ListGroupItem>
          Description: {product.description}
        </ListGroupItem>

      </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>
                Price:
                </Col>
                <Col>
                <strong>₹ {product.Price}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                Status:
                </Col>
                <Col>
                {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroupItem>
            {product.countInStock > 0 && (<ListGroupItem>
              <Row>
                <Col>
                Qty
                </Col>
                <Col>
                <FormControl as='select' value={qty} onChange={(e)=> {setQty(e.target.value)}}>
                  {
                    [...Array(product.countInStock).keys()].map((x) => (
                      <option key={x+1} value={x+1}>
                        {x+1}
                      </option>
                    ))
                  }
                </FormControl>
                </Col>
              </Row>
            </ListGroupItem>)}
            <ListGroupItem>
              <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.countInStock === 0}>
                Add To Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>)}
    
    </>
  )
}

export default ProductScreen