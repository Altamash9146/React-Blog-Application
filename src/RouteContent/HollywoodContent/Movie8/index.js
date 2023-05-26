import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie8.style.css"
import Movie8Content from './Movie8'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie8 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie8Content/>
    </ContextApi>
    </>
  )
}

export default Movie8