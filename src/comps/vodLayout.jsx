import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function VodLayout() {
const {paramVal,year} = useContext(AppContext);
const nav = useNavigate();
const [vodArr,setVodArr] = useState([]);
const [doingApi,setDoingApi] = useState(false);





useEffect(() => {
  doApi(paramVal); 
  
    
 
},[paramVal,year])

  const doApi = async (search)=>{
    setDoingApi(true);
    let url = `https://www.omdbapi.com/?s=${search}&y=${year}&apikey=53eb6ccf`;
    let resp  = await axios.get(url);
    setVodArr(resp.data.Search);
    
    setDoingApi(false);
   
  }
  console.log(vodArr);
  
  if(doingApi){return(<h2 className='text-center'>Loading...</h2>)}
  
  if(vodArr){
    return (
    
      <div className='container'>
        <h4 className='text-center'>results for "{paramVal}" from "{year || "all years"}" </h4>
        <div className='row p-3'>
        {vodArr.map((item,i)=>{
          return(
            <div key={i} className='col-md-4 col-lg-3 p-3' onClick={()=>{nav('/info/'+item.imdbID)}}>
              <div className=' box card poster shadow p-3'>
               
                <img src={item.Poster} alt={item.Title} />
              </div>
              </div>
            
          )
        })}
        </div>
        
      </div>
    )
    
  }
  else{
    return(<h1>not found</h1>)
  }
  
}
