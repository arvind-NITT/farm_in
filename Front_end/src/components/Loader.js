import { Colors } from 'chart.js'
import React from 'react'
import Style from './Styles.css'
export default function Loader() {
   
  return (
    <div className='container d-flex justify-item-center'>
       <div className="loader"style={Style} >
        <div className="ball" style={Style}></div>
        <div className="ball" style={Style}></div>
        <div className="ball" style={Style}></div>
       
        <span style={{color:"white"}}>Loading....</span>
    </div>
    </div>
  )
}
