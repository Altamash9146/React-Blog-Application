import React from "react";
import "./Food.style.css"
import ColorCombination from "../Home/ColorCombination";
import ContextApi from "../../Utility/ContextStore/ContextData";
import FoodData from "./FoodData";
import FoodTopPost from "./FoodTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
import LogoMobileRoute from "./LogoMobileRoute"

const Food = () => {
  return (
   <>
   <Logo/>
  <MobileRoute/>
  <LogoMobileRoute/>
   <TopNavigation/>
      <ContextApi>
    <ColorCombination/>
      <FoodData/>
      < FoodTopPost/>
      </ContextApi>
   </>
  )
}

export default Food