import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { addDoc, collections } from '../AddFirebase/AddFirebase'


const CardRender = () => {
    let [data, setData] = useState([])
    console.log(data);

    useEffect(() => {
        Fetch_Data()
    }, [])

    let Fetch_Data = async () => {
        let response = await axios.get('https://fakestoreapi.com/products')
        let data = response.data
        setData(data)
    }


    let AddCartFirebase = async (value) => {
        let response = await addDoc(collections, value)
        console.log(response);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        data.map((value, index) => (

                            <div key={index} className="col-4 my-5 ">
                                <Card
                                    UserData={value}
                                    AddToCart={()=>AddCartFirebase(value)} />
                            </div>
                        ))

                    }
                </div>
            </div>

        </>
    )
}

export default CardRender
