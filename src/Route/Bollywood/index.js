import React from "react";
import "./Bollywood.style.css"
import BollywoodData from "./BollywoodData";
import BollywoodTopPost from "./TopPost";
import ContextApi from "../../Utility/ContextStore/ContextData";
import { Logo,TopNavigation} from "../../Components";
import MobileRoute from "./MobileRouteNavi";
const Bollywood = () =>{
    return(
        <>
        <Logo/>
        <MobileRoute/>
        <TopNavigation/>
        <ContextApi>
        <BollywoodData/>
        <BollywoodTopPost/>
        </ContextApi>
        </>
    )
}

export default Bollywood