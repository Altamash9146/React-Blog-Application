import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  BajrangiBhaijanContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="BajrangiBhaijan-line"/>
    <div className="BajrangiBhaijan-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="BajrangiBhaijan-Heading">!!!{d.title6}!!!</h2>
        <Link to={"/Bollywood"}><button className="BajrangiBhaijan-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="BajrangiBhaijan-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="BajrangiBhaijan-Boy-Logo"/>
            <p className="BajrangiBhaijan-Dimitry">Dimitry Nozhenko</p>
            <p className="BajrangiBhaijan-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="BajrangiBhaijan-Social-Media-Logo"/>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="BajrangiBhaijan-Image"/>
        <div className="BajrangiBhaijan-Image-Name">Image:{d.title6}</div>
        <div className="BajrangiBhaijan-Para-Container">
        <p>{d.fpara1}</p>
        <p>{d.fpara2}</p>
        <p>{d.fpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default BajrangiBhaijanContent