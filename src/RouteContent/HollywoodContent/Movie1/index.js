import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie1.style.css"
import Movie1Content from './Movie1'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie1 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie1Content/>
    </ContextApi>
    </>
  )
}

export default Movie1