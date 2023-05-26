import React from "react";
import "./Bollywood.style.css"
import BollywoodData from "./BollywoodData";
import BollywoodTopPost from "./TopPost";
import ColorCombination from "../Home/ColorCombination";
import ContextApi from "../../Utility/ContextStore/ContextData";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
import LogoMobileRoute from "./LogoMobileRoute"
const Bollywood = () =>{
    return(
        <>
        <Logo/>
        <MobileRoute/>
        <LogoMobileRoute/>
        <TopNavigation/>
        <ContextApi>
        <ColorCombination/>
        <BollywoodData/>
        <BollywoodTopPost/>
        </ContextApi>
        </>
    )
}

export default Bollywood