import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';



export default function ByYear() {
    const [yearsArr]=useState([ 2021 , 2020 , 2000 , 1995, 1989]);
    const {setYear}= useContext(AppContext);
    const param= useParams();
  // To prevent a get request when switch to "ByYear" component for first time.
    useEffect(() => {
      
        
     
    },[])

    useEffect(() => {
      setYear(param.yearP)
        
     
    },[param.yearP])
    

  return (
    <div className="d-flex justify-content-center container  ">
      <nav className='text-center'>
      <Link  className=' btn bg-info m-3 ' to={"/year/"}>all years</Link>
        {yearsArr.map((item,i)=>{
            return(
                <Link key={i} className='btn bg-info m-3 ' to={"/year/"+item}>{item}</Link>
            )
        })}
      </nav>
        
            
       
        
    </div>
  )
}
