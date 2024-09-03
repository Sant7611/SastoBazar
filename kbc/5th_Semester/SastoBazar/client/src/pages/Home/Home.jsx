import React from 'react'
import Banner from '../banner/Banner'
import Products from '../product/Products'

export default function Home() {
  return (
    <>
    <div className='bannerPage'>
        <Banner />
    </div>
    <div>
      <Products />
    </div>
    </>
  )
}
