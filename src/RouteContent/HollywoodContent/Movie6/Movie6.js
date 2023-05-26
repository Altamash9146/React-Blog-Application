import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Movie6Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Movie6-line"/>
    <div className="Movie6-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Movie6-Heading">!!!{d.title6}!!!</h3>
        <Link to={"/Hollywood"}><button className="Movie6-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie6-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Movie6-Boy-Logo"/>
            <p className="Movie6-Dimitry">Dimitry Nozhenko</p>
            <p className="Movie6-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Movie6-Social-Media-Logo"/>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="Movie6-Image"/>
        <div className="Movie6-Image-Name">Image:{d.title6}</div>
        <div className="Movie6-Para-Container">
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

export default Movie6Content