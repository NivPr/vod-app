import React, { useContext, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';


export default function ByName() {
    const nav = useNavigate();
    const searchRef= useRef();
    const param = useParams();
    const {setParamVal} = useContext(AppContext);

    useEffect(() => {
      if (param.searchP) {
        setParamVal(param.searchP);
      }
         
       },[param.searchP]);

       const onKeyboardClick = (e) => {
        // check if we click Enter 
        if(e.key == "Enter"){
          nav("/search/" + searchRef.current.value);
        }
      }

    return (
        <div className="d-flex justify-content-center p-3">
      <input ref={searchRef} type="text" onKeyDown={onKeyboardClick} placeholder='search by name...' />
      
        
  
      
      <button className='btn bg-info m-1'  onClick={()=>{
        nav("/search/" + searchRef.current.value);
        
      }}><i className="fa fa-search"></i></button>
      
    
      
        
      
      </div>
      
    )
  }

