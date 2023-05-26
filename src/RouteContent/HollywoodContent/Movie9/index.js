import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie9.style.css"
import Movie9Content from './Movie9'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie9 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie9Content/>
    </ContextApi>
    </>
  )
}

export default Movie9