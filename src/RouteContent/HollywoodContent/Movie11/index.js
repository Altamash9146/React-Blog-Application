import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie11.style.css"
import Movie11Content from './Movie11'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie11 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie11Content/>
    </ContextApi>
    </>
  )
}

export default Movie11