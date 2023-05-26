import React from "react";
import "./Fitness.style.css"
import ColorCombination from "../Home/ColorCombination";
import ContextApi from "../../Utility/ContextStore/ContextData";
import FitnessData from "./FitnessData";
import FitnessTopPost from "./FitnessTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
import LogoMobileRoute from "./LogoMobileRoute"
const Fitness = () => {
  return (
   <>
    <Logo/>
    <MobileRoute/>
    <LogoMobileRoute/>
    <TopNavigation/>
      <ContextApi>
    <ColorCombination/>
      <FitnessData/>
      < FitnessTopPost/>
      </ContextApi>
   </>
  )
}

export default Fitness