import React, { useState, useEffect } from "react";

//useEffect : side effect when a resource type changes
function UseEffectPageSecond() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)

  }

  useEffect(()=>{
    console.log('In UseEffectPageSecond Page useEffect()');
    window.addEventListener('resize',handleResize)//Need to add event listerner only once onMount
  },[]) 

  return (<div>{windowWidth}</div>);
}

export default UseEffectPageSecond;
