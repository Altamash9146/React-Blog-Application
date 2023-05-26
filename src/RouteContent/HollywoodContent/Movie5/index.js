import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie5.style.css"
import Movie5Content from './Movie5'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie5 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie5Content/>
    </ContextApi>
    </>
  )
}

export default Movie5