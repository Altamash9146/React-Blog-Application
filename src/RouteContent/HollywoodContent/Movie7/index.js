import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie7.style.css"
import Movie7Content from './Movie7'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie7 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie7Content/>
    </ContextApi>
    </>
  )
}

export default Movie7