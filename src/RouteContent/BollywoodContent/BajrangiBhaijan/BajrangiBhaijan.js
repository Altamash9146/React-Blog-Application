import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Bajrangi.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  BajrangiBhaijanContent = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="BajrangiBhaijan-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="BajrangiBhaijan-Heading">!!!{d.title6}!!!</h2>
        <Link to={"/Bollywood"}><button className="BajrangiBhaijan-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="BajrangiBhaijan-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="BajrangiBhaijan-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="BajrangiBhaijan-Social-Media-Logo"/>
        </div>

        <div className="BajrangiBhaijan-Date-Container">
        <p className="BajrangiBhaijan-Dimitry">Dimitry Nozhenko</p>
        <p className="BajrangiBhaijan-Date">Jan 28 2019 10 min read</p>
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