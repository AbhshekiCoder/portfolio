import {Swiper, SwiperSlide} from  'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import { useState, useEffect } from 'react';
import bg1 from '../images/bg1.png';

import p1 from '../images/p1 (1).png';
import p2 from '../images/p1 (2).png';
import p3 from '../images/p1 (3).png';
import p4 from '../images/p1 (4).png';
import p5 from '../images/p1 (5).png';
import p6 from '../images/p1 (6).png';
import p7 from '../images/p1 (7).png';
import p9 from '../images/p2 (13).png';
import p10 from '../images/p2 (12).png';
import p11 from '../images/p2 (11).png';
import p12 from '../images/p2 (14).png';
import p13 from '../images/p2 (10).png';
import p14 from '../images/p2 (9).png';
import p15 from '../images/p2 (8).png';
import p16 from '../images/p2 (7).png';
import p17 from '../images/p2 (6).png';
import p18 from '../images/p2 (5).png';
import p19 from '../images/p2 (4).png';
import p20 from '../images/p2 (3).png';
import p21 from '../images/p2 (2).png';
import p22 from '../images/p2 (1).png';
import p23 from '../images/p3 (1).png';
import p24 from '../images/p3 (2).png';
import p25 from '../images/p3 (3).png';
import p26 from '../images/p3 (4).png';
import p27 from '../images/p3 (5).png';
import p28 from '../images/p3 (6).png';
import p29 from '../images/p3 (7).png';
import p30 from '../images/p3 (8).png';
import p31 from '../images/p3 (9).png';
import p32 from '../images/p3 (10).png';
import p33 from '../images/p3 (11).png';
import {app, storage} from './Firebase';
import {get, push, set, getDatabase, ref} from 'firebase/database';











function Project({Profile1}){
    const [data, setData] = useState();
   
    const db = async()=>{
        let db = getDatabase(app);
        const dataref = ref(db, 'projects/');
        const snapshot = await get(dataref);
       
            console.log(Object.values(snapshot.val()));
            setData(Object.values(snapshot.val()));
            console.log(data)
    }
    useEffect( ()=>{
        db();
       
      

    },[])
    return(
        <>
        
        <div className="project border" style={{backgroundColor: Profile1 == 'white'?'white':'black', color: Profile1 == 'white'?'black':'white'}}>
       
        <div className="">
        <h1>
            My Projects
        </h1>
        {
            data?data.map((item) =>(
                <div className="project1 mt-3" data-aos = "fade-right" >
        <h1>{item.name}</h1>
        <Swiper className='slide' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
        {item.img.map((element)=>(
            <SwiperSlide className='swiper-slide1'>{element.includes('.mp4')?<video src = {element} controls></video>:<img src = {element}/>}</SwiperSlide>

        ))}
            
          
            
            
            
            
            
        </Swiper>
        <div className='description'  >
        <div className='description3 absolute' data-aos= "fade-down" style={{color:Profile1=='white'?'grey':'white'}}>
        <div className='flex justify-center text-2xl font-bold' style={{color:Profile1=='white'?'black':'white'}}>
            Features
        </div>
        
        Features:
        {item.features}
        </div>
        <div className='description1' data-aos = "flip-right" style={{color:Profile1=='white'?'grey':'white'}}>
        <div className='flex justify-center text-2xl font-bold' style={{color:Profile1=='white'?'black':'white'}}>
            Description
        </div>
          {item.description}
        </div>
        <div className='description2' data-aos = "fade-down"  style={{color:Profile1=='white'?'grey':'white'}}>
        <div className='flex justify-center text-2xl font-bold' style={{color:Profile1=='white'?'black':'white'}}>
           Technologies used:
        </div>
          {item.technologies_used}
        </div>
       

        </div>
      


                </div>

            )):''
        }
      

       

        </div>
        
        
        </div>
       
        </>
    )
}
export default Project;