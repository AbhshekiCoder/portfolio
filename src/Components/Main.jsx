import bg1 from '../images/bg1.png';
import {Swiper, SwiperSlide} from  'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import { useNavigate , useNavigation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import p1 from '../images/p1 (1).png';
import foody from '../images/p3 (1).png';
import cocoons from '../images/p2 (6).png';
import { useState } from 'react';
import { useEffect } from 'react';
import {app, storage} from './Firebase';
import {get, push, set, getDatabase, ref} from 'firebase/database';



function Main({profile1}){
    const [data, setData] = useState();
    const [count, setCount] = useState();
    
    
    useEffect( async()=>{
        let db = getDatabase(app);
        const dataref = ref(db, 'projects/');
        const snapshot = await get(dataref);
       
            console.log(Object.values(snapshot.val()));
            setData(Object.values(snapshot.val()));
            console.log(data)
      

    },[])
    let project = (e) =>{
        console.log(e)
        document.getElementById(e).classList.add('slides1');
        
      

    }
    let projects = (e)=>{
        document.getElementById(e).classList.remove('slides1');
        
       
      

    }
    
    let swiperslide = ()=>{
       
        return(
            <>
            {data?data.map((item)=>(
                <SwiperSlide className='swiper-slide rounded-xl border h-60 '  >
                <div className=' h-60  rounded-xl' onMouseOver={() =>project(item.name)} onMouseOut={()=>projects(item.name)}><div className='flex justify-center  items-center project2 rounded-xl' id ={item.name} >{item.name}</div><img src = {item.img[1]} className='h-full object-cover rounded-xl'/></div></SwiperSlide>
                
                
                
            )):''}
               
            </>
        )
       
    }
    let submit  = ()=>{
        let form = document.forms['form'];
        let name = form.name.value;
        let email = form.email.value;
        let phone = form.phone.value;
        let description = form.description.value;
        let db = getDatabase(app);
        const dataref = ref(db, `users/${name}`);
        set(dataref, {
            name: name,
            email: email,
            phone: phone,
            description: description
        }).then(()=>{
            alert('successfully updated');
        })
    }

   
    
    
    return(
      
        <>
       
        <div className="main-container " style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
        <div className='flex'>
        <div className="details">
            <h1>Hy Iam</h1>
            
            <p>Aditiya Singh</p>
           
          
            
            <div  className="detail mt-3 text-gray-600 w-96 max-md:w-72 ">
                <div style ={{color: profile1 == 'white'?'grey':'white'}} > Fullstack Web devloper with high skills and project delevier experience in many project of company</div>
                <button><Link to = '/About'>More</Link></button>
            </div>
        </div>
        <div className="image rounded-circle border max-md:absolute ">
            <img src = {bg1} className=" rounded-circle"/>
             </div>
        
            

        </div>
        <div className='icon flex' >
        <div data-aos = "fade-down" className='rounded-circle' >
        <i className="fa-brands fa-github text-4xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-linkedin text-4xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-facebook text-4xl text-orange-400 rounded-circle"></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-instagram text-4xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-whatsapp text-4xl text-orange-400 rounded-circle"></i>
        </div>






        </div>
        <div className='row skills'  id = "skills">
        <div className = "col-md skill">
        <h1>Technicals Skills</h1>
        <p>I Have Web development technologies with HTML, Javascript, CSS, PHP, Node.js, React, Mongo, Java, C/C++,DSA
        </p>

        </div>
        <div className='col-md skill1'>
        <div className='rounded-circle bg3 '>
        <div className='rounded-circle skill1'>
        <i class="fa-brands fa-html5"></i>

        </div>
        <div className='rounded-circle skill2'>
        <i class="fa-brands fa-php"></i>

         </div>
         <div className='rounded-circle skill3'>
         <i class="fa-brands fa-react"></i>

        </div>
         <div className='rounded-circle skill4'>
         <i class="fa-brands fa-node"></i>

         </div>
         <div className='rounded-circle skill5'>
         <i class="fa-brands fa-js"></i>

         </div>


    

        </div>
        <div className='skill-role w-fit h-fit'>
       
        <div className='rounded-circle bg1'>
        
         </div>
        <div className='rounded-circle bg2'>

        </div> 
        
        </div>
       

      </div>
        </div>
        <div className = "bg">

</div>

        <div className='services z-10 row' style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
        <div className = "col-md z-10">
        <h1>My Awesome </h1>
        <p>Services</p>
        <p1 >we provided related to web development, Backend, Fullstack, UI/UX design, editing,
        seo</p1>
        <div>
        <button className='rounded-sm bg-orange-400 text-white w-40'>Download CV</button>

        </div>
       

        </div>
        <div className = "col-md card" style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
        <div className='card3 absolute'  >
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-laugh-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>Content Creator</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5'>Web Design, Web devlopment, Seo </div>
       <a href = "#" className=' flex justify-center text-blue-300'>Learn More</a>



        </div>

        <div className='card1 ' data-aos = "fade-right">
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-grin-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>UI UX Design</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5 max-md:text-sm max-md:mt-2'>figma, photoshope Adobe, Adobe xd </div>
       <a href = "#" className=' flex justify-center text-blue-300  max-md:text-sm max-md:mt-'>Learn More</a>


        </div>
        <div className='card2' >
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-laugh-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>Web Developer</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5   max-md:mt-2'>Web Design, Web devlopment, Seo </div>
       <a href = "#" className=' flex justify-center text-blue-300  max-md:text-sm max-md:mt-'>Learn More</a>



        </div>

        </div>
       
            
        </div>

        <div className='projects' id = "projects">
        <h1>My Projects</h1>
        <div className=' max-md:hidden slide1'>
      {swiperslide()}
        <Swiper className='swiper max-md:hidden' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={3} spaceBetween={30} >
        
            
        </Swiper>

        </div>
      

       
       
        <div className='hidden swiper1'>
        <Swiper className='swiper2 hidden max-md:block ' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
        <SwiperSlide className='swiper-slide'><img src = {p1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {cocoons} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {foody} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            
        </Swiper>

        </div>
      
        <div>
        <button className='border' ><Link to = "/Project">More</Link> </button>

        </div>
      

        </div>
      
      
      
        </div>
         <div className='register row' id = "contact" >
         <div className = "col-md">
            <h1 className='text-4xl '>Get in Touch</h1>
            <p className='text-4xl '>Contact Us </p>
         </div>
         <div className='col-md  w-96 form'>
         <form  className=' w-96 p-3' name = "form">
            <div className=''>
                <i className='fa fa-user'></i><input type='text' name = "name" placeholder='name'/>
            </div>
            <div>
            <i class="fa-regular fa-envelope"></i><input type='email' name = "email" placeholder='email'/>
            </div>
            <div>
                <i className='fa fa-phone'></i><input type='phone' name = "phone" placeholder='phone'/>
            </div>
            <textarea type='text' name = "description" placeholder='text' rows={3} cols={46}  className=' mt-9 rounded-xl border-orange-300 ' ></textarea>
         
         </form>
         <button onClick={submit}>Send</button>

         </div>
         
         </div>
         
      
        
      
        
       </>
    )

}
export default Main;