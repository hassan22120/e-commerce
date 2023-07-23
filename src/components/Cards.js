import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardsData from './CardsData'
import "./Style.css";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {
    const [data, setData] = useState(CardsData);
    const dispatch = useDispatch();
    const send = (e)=>{
        dispatch(ADD(e));
    }

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Projects</h2>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    data.map((element, id) => {
                        return (
                                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style" key={element.id}>
                                    <NavLink to={`/cart/${element.id}`} >
                                    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3"/>
                                    </NavLink>
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            Price : ₹ {element.price}
                                        </Card.Text>
                                        <div className="button_div d-flex justify-content-center">
                                            <Button variant="primary"
                                                    onClick={()=> send(element)}
                                                    className='col-lg-12'>Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards