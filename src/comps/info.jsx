import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';


export default function Info() {
    const param = useParams();
    
    const [doingApi,setDoingApi] =useState(false);
    const [aboutArr,SetAboutArr] = useState({});
    const [stars,setStars] = useState(10)
    
   
    const nav = useNavigate();
    useEffect(() => {
        doApi();
          
       
      },[]);

      useEffect(() => {
        // To hide the stars when movie get no rank.
        if(aboutArr.imdbRating=="N/A"){setStars(0)};
          
       
      },[aboutArr]);

      const doApi = async() =>{
          setDoingApi(true);
          let url = `https://www.omdbapi.com/?i=${param.id}&apikey=53eb6ccf`;
          let resp = await axios.get(url);
          console.log(resp.data);
          SetAboutArr(resp.data);
          setDoingApi(false);
      }
      

      if(doingApi){return(<h2 className=' text-center '>Loading...</h2>)}
      return(
        <div className='container my-4 '>        
         
             <div className='box card shadow m-4'>
                 
               <div className=' p-3 d-block d-md-flex'>
                 <div className='text-center'><img alt={aboutArr.Title}  src={aboutArr.Poster} className='md-mx-auto'/></div>
             
             <div className='mx-4'>
             <h2 className='text-center' >{aboutArr.Title}</h2>           
              <h4>info: {aboutArr.Plot}</h4>
              <h3>Actors: {aboutArr.Actors}</h3>
              
              <h4> imdb rating: {aboutArr.imdbRating} <spen >/ 10</spen> < Rating initialValue={aboutArr.imdbRating} iconsCount={stars} readonly={true} size={25} /></h4>
              
              <button onClick={()=>{nav(-1)}} className='btn bg-info'>back</button>   
             </div>   
            </div>
         </div>
         </div>
       )
}
