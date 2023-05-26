import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Movie6.style.css"
import Movie6Content from './Movie6'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Movie6 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Movie6Content/>
    </ContextApi>
    </>
  )
}

export default Movie6