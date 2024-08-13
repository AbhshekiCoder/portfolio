import bg1 from '../images/user.webp';
import {SwiperSlide, Swiper} from 'swiper/react';
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
import pdf from '../images/Purple and White Clean and Professional Resume.pdf';


function Main({Profile1}){
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
    let project = (e) =>{
        console.log(e)
        document.getElementById(e).classList.add('slides1');
        
      

    }
    let projects = (e)=>{
        document.getElementById(e).classList.remove('slides1');
        
       
      

    }
    let project1 = (e) =>{
      
        document.getElementById(e).classList.add('slides1');
        
      

    }
    let projects1 = (e)=>{
        document.getElementById(e).classList.remove('slides1');
        
       
      

    }
    
    let swiperslide = ()=>{
       
        return(
            <>
            {data?data.map((item)=>(
                <SwiperSlide className='swiper-slide  ml-3 rounded-xl  max-md:ml-0 '  >
                <div className='  rounded-xl' onMouseOver={() =>project(item.name)} onMouseOut={()=>projects(item.name)}><div className='flex justify-center  items-center project2 rounded-xl'  id ={item.name} >{item.name}</div><img src = {item.img[1]} className='h-full object-cover rounded-xl '/></div></SwiperSlide>
                
                
                
            )):''}
               
            </>
        )
       
    }
    let swiperslide1 = ()=>{
       
        return(
            <>
            {data?data.map((item)=>(
                <SwiperSlide className='swiper-slide  ml-3 rounded-xl  max-md:ml-0 '  >
                <div className='  rounded-xl' onMouseOver={() =>project1(item.id)} onMouseOut={()=>projects1(item.id)}><div className='flex justify-center  items-center project2 rounded-xl'  id ={item.id} >{item.name}</div><img src = {item.img[1]} className='h-full object-cover rounded-xl '/></div></SwiperSlide>
                
                
                
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
       
        <div className="main-container w-full
        
         " style={{backgroundColor: Profile1 == 'white'?'white':'black', color: Profile1 == 'white'?'black':'white'}}>
        <div className='flex max-md:w-full'>
        <div className="details" style={{fontFamily: "poppins"}}>
            <h1>Hy Iam</h1>
            
            <p>Aditiya Singh</p>
           
          
            
            <div  className="detail mt-3 text-gray-600 w-96 max-md:w-72  ">
                <div style ={{color: Profile1 == 'white'?'grey':'white'}} > Fullstack Web devloper with high skills and project delevier experience in many project of company</div>
                <button><Link to = '/About'>More</Link></button>
            </div>
        </div>
        <div className="image rounded-circle  max-md:absolute ">
            <img src = {bg1} className=" rounded-circle"/>
         </div>
        
            

        </div>
        <div className='icon flex  max-md:ml-0  ' >
        <div data-aos = "fade-down" className='rounded-circle' >
        <a href = "https://github.com/AbhshekiCoder"> <i className="fa-brands fa-github text-4xl text-orange-400 rounded-circle "></i></a>
       
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <a href = "https://www.linkedin.com/in/abhishek-gour-cs-a981b224b">
        <i className="fa-brands fa-linkedin text-4xl text-orange-400 rounded-circle "></i>
        </a>
      
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i className="fa-brands fa-facebook text-4xl text-orange-400 rounded-circle"></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i className="fa-brands fa-instagram text-4xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <a href = "https://wa.link/c9zrjn">  <i className="fa-brands fa-whatsapp text-4xl text-orange-400 rounded-circle"></i></a>
      
        </div>






        </div>
        <div className='row skills  max-md:w-full border '  id = "skills">
        <div className = "col-md skill  " style ={{fontFamily: "poppins", fontSize: "18px"}}>
        <h1 className=''>Technicals Skills</h1>
        <p className=''>Versatile web developer with expertise in building dynamic and responsive applications using modern technologies like MERN stack, React, PHP, Node.js, MySQLi, Firebase, and MongoDB. Proficient in front-end design with Tailwind, Bootstrap, Vanilla JavaScript, HTML, and CSS, and experienced in back-end development with Express.js. Dedicated to creating seamless user experiences and scalable solutions.
        </p>

        </div>
        <div className='col-md skill1   '>
        <div className='rounded-circle bg3  '>
        <div className='rounded-circle skill1'>
        <i className="fa-brands fa-html5"></i>

        </div>
        <div className='rounded-circle skill2'>
        <i className="fa-brands fa-php"></i>

         </div>
         <div className='rounded-circle skill3'>
         <i className="fa-brands fa-react"></i>

        </div>
         <div className='rounded-circle skill4'>
         <i className="fa-brands fa-node"></i>

         </div>
         <div className='rounded-circle skill5'>
         <i className="fa-brands fa-js"></i>

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
       

        <div className='services z-10 row ' style={{backgroundColor: Profile1 == 'white'?'white':'black', color: Profile1 == 'white'?'black':'white'}}>
        <div className = "col-md z-10  borders">
        <h1 className=''>My Awesome </h1>
        <p className=' '>Services</p>
        <p1 >we provided service related to web development, Backend, Fullstack, UI/UX design
        seo</p1>
        <div>
        <button className='rounded-sm bg-orange-400 text-white w-40'><a href = {pdf} download='Purple and White Clean and Professional Resume.pdf'>Download CV</a></button>

        </div>
       

        </div>
        <div className = "col-md card  border" style={{backgroundColor: Profile1 == 'white'?'white':'black', color: Profile1 == 'white'?'black':'white'}}>
        <div className='card3 absolute h-fit   '   >
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-laugh-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>Content Creator</div>
        <div className='flex justify-center mt-3   text-gray-400 w-full max-md:text-xs  pl-5'>Web Design, Web devlopment, Seo </div>
       <a href = "#" className=' flex justify-center text-blue-300'>Learn More</a>



        </div>

        <div className='card1 h-fit  '  data-aos = "fade-right">
        <div className=' flex justify-center '>
        <i class="fa-solid fa-face-grin-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3  '>UI UX Design</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5 max-md:text-xs max-md:mt-2'>figma, photoshope Adobe, Adobe xd </div>
       <a href = "#" className=' flex justify-center text-blue-300  max-md:text-sm max-md:mt-'>Learn More</a>


        </div>
        <div className='card2 h-fit' >
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-laugh-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>Web Developer</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5 max-md:text-xs max-md:mt-2'>Web Design, Web devlopment, Seo </div>
       <a href = "#" className=' flex justify-center text-blue-300  max-md:text-sm max-md:mt-'>Learn More</a>



        </div>

        </div>
       
            
        </div>

        <div className='projects border ' id = "projects">
        <h1  className='max-md:text-2xl'>My Projects</h1>
        <div className=' max-md:hidden slide1 '>
      
        <Swiper className='swiper max-md:hidden ' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={3} spaceBetween={30} >
        {swiperslide()}
            
        </Swiper>

        </div>
      

       
       
        <div className='hidden swiper1'>
        <Swiper className='swiper2 hidden max-md:block ' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
        
            {swiperslide1()}
            
        </Swiper>

        </div>
      
        <div>
        <button className='border' ><Link to = "/Project">More</Link> </button>

        </div>
      

        </div>
      
      
      
        
         <div className='register row max-md:w-ful border ' id = "contact" >
         <div className = "col-md">
            <h1 className='text-4xl max-md:text-2xl '>Get in Touch</h1>
            <p className='text-4xl max-md:text-2xl'>Contact Us </p>
         </div>
         <div className='col-md  w-96 form' data-aos = "fade-down">
         <form  className=' w-96 p-3' name = "form">
            <div className=''>
                <i className='fa fa-user'></i><input type='text' name = "name" placeholder='name'/>
            </div>
            <div>
            <i className="fa-regular fa-envelope"></i><input type='email' name = "email" placeholder='email'/>
            </div>
            <div>
                <i className='fa fa-phone'></i><input type='phone' name = "phone" placeholder='phone'/>
            </div>
            <textarea type='text' name = "description" placeholder='text'   className=' mt-9 rounded-xl border-orange-300 ' ></textarea>
         
         </form>
         <button onClick={submit}>Send</button>

         </div>
         
         </div>
         </div>
      
        
      
        
       </>
    )

}
export default Main;