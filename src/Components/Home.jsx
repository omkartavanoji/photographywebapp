import React from 'react'
import {Outlet} from 'react-router-dom'

const Home = () => {
  return (
    <>
     <Outlet></Outlet>
       <div id='bgimg'>
        <h1>PHOTOGRAPHER BASED IN BELGAUM</h1>
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <h2>"Capturing life's precious moments, one photograph at a time. Let us turn your memories into
            timeless art."</h2>
        </marquee>
      </div>
     
    </>
  )
}

export default Home