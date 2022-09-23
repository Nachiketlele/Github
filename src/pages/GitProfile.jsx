import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdatarepos, getDatas } from '../redux/appreducer/action'

const GitProfile = ({page,setPage}) => {
  const {data,loading} = useSelector((state)=>state.data)
  const {repo} = useSelector((state)=>state.repo)
  const dateToTime = date => date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });
  
   console.log(page)

   if(loading){
      return <h1>Loading....</h1>
   }
  return (
   
   <div style={{width:"100%", marginTop:"80px", display:"flex"}}>
   <div style={{width:"20%", border:"1px solid red", height:"550px", borderRadius:"15px",marginLeft:"20px"}} >
      <img style={{borderRadius:"50%", margin:"auto",width:"70%",paddingTop:"10px"}}  src={data.avatar_url}/>
      <div style={{padding:"15px"}} >
         <p style={{fontSize:"25px", fontWeight:800,textAlign:"left"}}>{data.name}</p>
         <p style={{fontSize:"17px", textAlign:"left", marginTop:"-10px"}}>{data.location}</p>
         <p style={{fontSize:"17px", textAlign:"justify"}}>{data.bio}</p>
         <p style={{fontSize:"18px", fontWeight:800, textAlign:"left"}} >{data.followers} Followers</p>
         
      </div>
   </div>
   <div>
       {repo.map((el)=>(
        <div style={{border:"1px solid black", width:"1000px",marginLeft:"30px",borderLeft:"none",borderRight:"none",paddingBottom:"20px"}} >
         <div style={{display:"flex", alignItems:"center"}}>
           <p style={{fontSize:"30px", fontWeight:800,textAlign:"left",marginRight:"20px",paddingLeft:"20px"}}>{el.name}</p>
            <p style={{border:"1px solid black",borderRadius:"30px",padding:"2px 10px 2px 10px",fontSize:"10px",marginTop:"15px"}}>{el.visibility}</p>
         </div>
         <div style={{display:"flex", alignItems:"center",marginTop:"-40px"}}>
            <p style={{fontSize:"15px", fontWeight:200,textAlign:"left",marginRight:"20px",paddingLeft:"20px"}}>{el.language}</p>
            <p style={{fontSize:"12px", fontWeight:200,textAlign:"left",marginRight:"20px",paddingLeft:"20px"}}>Last updated {dateToTime(new Date(el.updated_at))} hours ago</p>
         </div>
        </div>
       ))}
   </div>
</div>
  )
}

export default GitProfile
