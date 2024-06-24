import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    console.log(props);
    let {image, title, description, price} = props.UserData
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={image} alt='Picture'/>
                    <div className="card-body">
                        <h5 className="title">{title}</h5>
                        <p className="description">{description}</p>
                        <p className='price'><b>Price :</b> {price}</p>
                        <Link className='text-decoration-none fw-bold btn btn-success' onClick={props.AddToCart} > Click Here</Link>
                    </div>
            </div>
        </>
    )
}

export default Card
