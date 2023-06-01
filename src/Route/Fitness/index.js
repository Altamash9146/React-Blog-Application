import React from "react";
import "./Fitness.style.css"
import ContextApi from "../../Utility/ContextStore/ContextData";
import FitnessData from "./FitnessData";
import FitnessTopPost from "./FitnessTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
const Fitness = () => {
  return (
   <>
    <Logo/>
    <MobileRoute/>
    <TopNavigation/>
      <ContextApi>
      <FitnessData/>
      < FitnessTopPost/>
      </ContextApi>
   </>
  )
}

export default Fitness