import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie4.style.css"
import Movie4Content from './Movie4'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie4 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie4Content/>
    </ContextApi>
    </>
  )
}

export default Movie4