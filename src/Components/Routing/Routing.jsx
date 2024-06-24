import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardRender from '../CardRender/CardRender'
import Cart from '../Cart/Cart'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<CardRender/>}/>
        <Route path='/Cart' element={<Cart/>}/>

      </Routes>
    </>
  )
}

export default Routing
