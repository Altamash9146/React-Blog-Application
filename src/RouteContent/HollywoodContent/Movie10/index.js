import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie10.style.css"
import Movie10Content from './Movie10'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie10 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie10Content/>
    </ContextApi>
    </>
  )
}

export default Movie10