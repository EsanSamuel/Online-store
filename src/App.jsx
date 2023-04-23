import React from 'react'
import { Navbar, } from './components'
import { Cart, Home } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>

        <div className='flex justify-between w-full nav p-5 card2 bg-[white]'>
          <Navbar />
        </div>



        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>



      </BrowserRouter>
    </div>
  )
}

export default App