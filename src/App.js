import React, { useState } from 'react';
import './App.css';
function App() {
  let [color,setColor]=useState("olive")
  return (
    <div  className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='flex justify-center flex-wrap '>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'red'}} onClick={()=>setColor("red")}>red</button>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'green'}} onClick={()=>setColor("green")}>green</button>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'blue'}} onClick={()=>setColor("blue")}>blue</button>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'YELLOW'}} onClick={()=>setColor("YELLOW")}>YELLOW</button>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'pink'}} onClick={()=>setColor("pink")}>pink</button>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'black'}} onClick={()=>setColor("black")}>black</button>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'white'}} onClick={()=>setColor("white")}>white</button>
      <button className=' rounded-l p-4 m-2' style={{backgroundColor:'maroon'}} onClick={()=>setColor("maroon")}>maroon</button>


    </div>
    </div>
  );
}

export default App;
