import React from "react";
import {Link, Outlet} from "react-router-dom";


class ManPage extends React.Component{
  render(){
    return(
      <>
      <div className="header_item nav">
        <ul>
        <li><Link to='shirts'>Shirts</Link></li>
        <li><Link to='shoes'>Shoes</Link></li>
        </ul>
      </div>
        
        <div className="content">
          <Outlet/>
          <img alt="" className="header_img" src={require("../storage/manPageHeader.jpg")}/>
        </div>  
      </>
    )
  }
}

export default ManPage