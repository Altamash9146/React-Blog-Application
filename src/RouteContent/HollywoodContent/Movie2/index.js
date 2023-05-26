import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie2.style.css"
import Movie2Content from './Movie2'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie2 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie2Content/>
    </ContextApi>
    </>
  )
}

export default Movie2