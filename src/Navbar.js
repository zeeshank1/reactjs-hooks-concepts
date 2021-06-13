import React from "react";
import { Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <div style={{padding:"20px 20px 20px 20px"}}>
        <Link style={{padding:"6px 6px 6px 6px"}} to="/">Home</Link>
        <Link style={{padding:"6px 6px 6px 6px"}} to="/useStatePage">UseState</Link>
        <Link style={{padding:"6px 6px 6px 6px"}} to="/useEffectPage">UseEffect</Link>
        <br />
      </div>
    </>
  );
}

export default Navbar;