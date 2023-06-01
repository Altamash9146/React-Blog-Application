import React from "react";
import "./Food.style.css"
import ContextApi from "../../Utility/ContextStore/ContextData";
import FoodData from "./FoodData";
import FoodTopPost from "./FoodTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";

const Food = () => {
  return (
   <>
   <Logo/>
  <MobileRoute/>
   <TopNavigation/>
      <ContextApi>
      <FoodData/>
      < FoodTopPost/>
      </ContextApi>
   </>
  )
}

export default Food