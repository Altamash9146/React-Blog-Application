import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie3.style.css"
import Movie3Content from './Movie3'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie3 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie3Content/>
    </ContextApi>
    </>
  )
}

export default Movie3