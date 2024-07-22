import { Link } from "react-router-dom";
import bg1 from '../images/bg1.svg';
import bg from '../images/bg1.png';
import {app, storage} from './Firebase';
import {get, push, set, getDatabase, ref} from 'firebase/database';
import { useState, useEffect } from "react";

function Vlog({Profile1}){
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
    if(Profile1 == 'black'){
         document.querySelectorAll('.progress-bar').forEach((element)=>{
            element.classList.add('bg-warning');
         })
    }
    else{
        document.querySelectorAll('.progress-bar').forEach((element)=>{
            element.classList.remove('bg-warning');
         })
        
    }
    let product = (e)=>{
        document.getElementById(e).style.height = "176px";


    }
    let product1 = (e)=>{
        document.getElementById(e).style.height = "0px";


    }
    return(
        <>
        <div className="  w-full h-full" style={{backgroundColor: Profile1 == 'white'?'white':'black', color: Profile1 == 'white'?'black':'white'}}>
        <div className=" w-9   side-bar">
        <div data-aos = "fade-down" className='rounded-circle mt-2' >
        <i className="fa-brands fa-github text-3xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle mt-2'>
        <i className="fa-brands fa-linkedin text-3xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle mt-2'>
        <i className="fa-brands fa-facebook text-3xl text-orange-400 rounded-circle"></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle mt-2'>
        <i className="fa-brands fa-instagram text-3xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle mt-2'>
        <i className="fa-brands fa-whatsapp text-3xl text-orange-400 rounded-circle"></i>
        </div>
        <div>

        </div>

        </div>

        <div className="  mt-40 flex justify-center">
        <div className="details max-md:ml-9" style={{fontFamily: "poppins"}}>
            <h1>Hy Iam</h1>
            
            <p>Aditiya Singh</p>
           
          
            
            <div  className="detail mt-3 text-gray-600 w-96 max-md:w-72 ">
                <div style ={{color: Profile1 == 'white'?'grey':'white'}} > Fullstack Web devloper with high skills and project delevier experience in many project of company</div>
                <button><Link to = '/About'>More</Link></button>
            </div>
        </div>


        </div>
        <div className="expertise mt-14 flex justify-center  bg-yellow-200" >
       <div className="m-auto max-md:w-full">
       <h1 style={{color: Profile1 == 'white'?'grey':'orange', fontFamily: "poppins"}} className="text-3xl font-bold  max-md:text-xl max-md:p-3 flex justify-center">My Expertise</h1>
          <div className="row p-3 ">
          <div className="col-md max-md:w-full">
          <div className="flex  mt-9 items-center max-md:mt-6">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36 " style={{color: Profile1 == 'white'?'#6383E6':'orange', fontFamily: "poppins"}}>Javascript</div>
            <div className=" ml-16  max-md:ml-0  ">
            <div class="progress w-80 max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '90%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'#6383E6e':'orange', fontFamily: "poppins"}}>HTML5 & CSS5</div>
            <div className="ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '90%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'#6383E6':'orange', fontFamily: "poppins"}}>Vanilla Javascript</div>
            <div className=" ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '70%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'#6383E6':'orange', fontFamily: "poppins"}}>React</div>
            <div className=" ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '50%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'#6383E6': 'orange', fontFamily: "poppins"}}>Node js</div>
            <div className=" ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '60%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>Express</div>
            <div className="ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '50%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>Mongo Db </div>
            <div className=" ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '50%'}} ></div>
            </div>

            </div>
          

            </div>

          </div>
          <div className="col-md ml-3 max-md:ml-0 max-md:w-full">
          <div className="flex  mt-9 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>PHP</div>
            <div className="border ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '90%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>Tailwind CSS</div>
            <div className=" ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '40%'}} ></div>
            </div>

            </div>
          

            </div>
            
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>Bootstrap</div>
            <div className=" ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '50%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>MYSQL</div>
            <div className="border ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '70%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>Firebase</div>
            <div className="border ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '60%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>Java</div>
            <div className="border ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '60%'}} ></div>
            </div>

            </div>
          

            </div>
            <div className="flex  mt-3 items-center max-md:mt-2">
            <div className=" text-blue-400 font-semibold text-2xl w-44 max-md:text-lg max-md:p-3 max-md:w-36" style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}}>C/C++</div>
            <div className="border ml-16  max-md:ml-0">
            <div class="progress w-80  max-md:w-40 " style={{color: Profile1 == 'white'?'blue':'orange', fontFamily: "poppins"}} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div class='progress-bar '  style={{width: '30%'}} ></div>
            </div>

            </div>
          

            </div>
            

          </div>

          </div>
          
           
            
             
          
          
          
       </div>
        </div>
        <div className="qualification mt-16 ">
        <div className=" max-w-4xl m-auto text-orange-500 qualifications">
            <h1 className="text-3xl  font-bold flex justify-center">My Qualification</h1>
            <div className="row mt-16">
                <div className="col-md p-3">
                <div className="flex items-center">
                    <div className="">
                    <i class="fa-solid fa-graduation-cap text-orange-400 text-4xl "></i>
                    </div>
                    <div className="ml-6 text-orange-400 font-bold text-xl max-md:text-lg">
                        Education
                    </div>
                </div>
                <div className="flex items-center h-24 mt-9">
                    <div className=" h-24  w-5">
                    <img src = {bg1} className="h-full w-5 "/>
                    </div>
                    <div className="ml-6  h-full">
                       <div className=" text-orange-400 font-bold text-xl max-md:text-lg">Btech in Computer Science</div> 
                       <div className="mt-3 ">2020-2024</div>
                    </div>
                </div>
                <div className="flex items-center h-24 mt-3">
                    <div className=" h-24  w-5">
                    <img src = {bg1} className="h-full w-5 "/>
                    </div>
                    <div className="ml-6  h-full">
                    <div className=" text-orange-400 font-bold text-xl max-md:text-lg">12th Mp Board</div> 
                    <div className="mt-3">2020</div>
                    </div>
                </div>
                <div className="flex items-center h-24 mt-3">
                    <div className=" h-24  w-5">
                    <img src = {bg1} className="h-full w-5 "/>
                    </div>
                    <div className="ml-6  h-full">
                    <div className=" text-orange-400 font-bold text-xl max-md:text-lg">10th Mp Board</div> 
                    <div className="mt-3 " >2018</div>
                    </div>
                </div>

                </div>
                <div className = "col-md p-3">
                <div className="flex items-center">
                    <div className="">
                    <i class="fa-solid fa-briefcase  text-orange-400 text-4xl"></i>
                    </div>
                    <div className="ml-6 text-orange-400 font-bold text-xl max-md:text-lg">
                        Experience
                    </div>
                </div>
                <div className="flex items-center h-24 mt-9">
                    <div className=" h-24  w-5">
                    <img src = {bg1} className="h-full w-5 "/>
                    </div>
                    <div className="ml-6  h-full">
                       <div className=" text-orange-400 font-bold text-xl max-md:text-lg">Internship In Novanector Pvt Ltd</div> 
                       <div className="mt-3 "> 1 month</div>
                    </div>
                </div>


                </div>
            </div>

        </div>

        </div>
        <div className="w-full h-fit mt-5">
        <h1 className="flex justify-center text-2xl font-bold text-orange-600">What I Offer</h1>
        <div className="faculity p-3 flex flex-wrap">
        <div className="item ml-9 max-md:ml-3 mt-3">
       
        <div className=" absolute z-10 ml-9">
        <i className="fa-solid fa-palette text-3xl text-white bg-orange-400 p-2 rounded-md z-10 max-md:text-xl max-md:p-1"></i>
        </div>
        <div className="border content  mt-3">
        <div className="text-orange-600 pl-5 mt-5 font-bold text-2xl max-md:text-xl flex justify-center">
          ui design 
        </div>
        <div className="pl-5 text-gray-500 mt-3 p-2  w-72 max-sm:text-sm max-md:w-36">
        we ui design service and logo design also
        </div>

        </div>
        
      

        <div>

        </div>
        

        </div>
        <div className="item  ml-9 max-md:ml-3 mt-3">
       
       <div className=" absolute z-10 ml-9">
       <i className="fa-solid fa-code  text-3xl text-white bg-orange-400 p-2 rounded-md z-10 max-md:text-xl max-md:p-1"></i>
       </div>
       <div className="border content  mt-3">
       <div className="text-orange-600 pl-5 mt-5 font-bold text-2xl  flex justify-center max-md:text-sm max-md:pl-3  ">
           Web Devloping
       </div>
       <div className="pl-5 text-gray-500 mt-3 p-2  w-72 max-sm:text-sm max-md:w-36">
          we provides web devlopment services 
       </div>

       </div>
       
     

       <div>

       </div>
       

       </div>
       <div className="item  ml-9 max-md:ml-3 mt-3">
       
       <div className=" absolute z-10 ml-9">
       <i className="fa-solid fa-layer-group  text-3xl text-white bg-orange-400 p-2 rounded-md z-10 max-md:text-xl max-md:p-1"></i>
       </div>
       <div className="border content  mt-3">
       <div className="text-orange-600 pl-5 mt-5 font-bold text-2xl   max-md:text-sm max-md:p-2">
           deployment Services
       </div>
       <div className="pl-5 text-gray-500 mt-3 p-2  w-72 max-sm:text-sm max-md:w-36">
           we provided an deployment and maintainance
       </div>

       </div>
       
     

       <div>

       </div>
       

       </div>
       <div className="item  ml-9 max-md:ml-3 mt-3">
       
       <div className=" absolute z-10 ml-9">
       <i className="fa-solid fa-pen-fancy  text-3xl text-white bg-orange-400 p-2 rounded-md z-10 max-md:text-xl max-md:p-1"></i>
       </div>
       <div className="border content  mt-3">
       <div className="text-orange-600 pl-5 mt-5 font-bold text-2xl  max-md:text-sm">
          Content Writing
       </div>
       <div className="pl-5 text-gray-500 mt-3 p-2  w-72 max-sm:text-sm max-md:w-36">
           we provided an content write of all like instagram, story, any subject, advertising
       </div>

       </div>
       
     

       <div>

       </div>
       

       </div>
       <div className="item  ml-9 max-md:ml-3 mt-3">
       
       <div className=" absolute z-10 ml-9">
       <i className="fa-brands fa-youtube text-3xl text-white bg-orange-400 p-2 rounded-md z-10 max-md:text-xl max-md:p-1"></i>
       </div>
       <div className="border content  mt-3">
       <div className="text-orange-600 pl-5 mt-5 font-bold text-2xl  max-md:text-sm max-md:p-2">
         youtube advertising
       </div>
       <div className="pl-5 text-gray-500 mt-3 p-2  w-72 max-sm:text-sm max-md:w-36">
           we provided an youtube advertising
       </div>

       </div>
       
     

       <div>

       </div>
       

       </div>
       <div className="item  ml-9 max-md:ml-3 mt-3">
       
       <div className=" absolute z-10 ml-9">
       <i className="fa-solid fa-mobile  text-3xl text-white bg-orange-400 p-2 rounded-md z-10 max-md:text-xl max-md:p-1"></i>
       </div>
       <div className="border content  mt-3">
       <div className="text-orange-600 pl-5 mt-5 font-bold text-2xl max-md:text-sm max-md:p-2">
       Android devloping
         
       </div>
       <div className="pl-5 text-gray-500 mt-3 p-2  w-72 max-sm:text-sm max-md:w-36">
        we providing Android devloping
       </div>

       </div>
       
     

       <div>

       </div>
       

       </div>
       
       </div>
       
    
       
        </div>

        <div className="work mt-11 w-full">
        <div className=" max-w-5xl m-auto ">
        <p className="flex justify-center text-orange-400 font-bold"> My Portfoilo</p>
        <h1 className="text-2xl text-orange-600 font-bold flex justify-center mt-3"> Recent Works</h1>
        <div className="grid grid-cols-3 mt-5 border gap-3 max-md:grid-cols-1 max-md:pl-3">
        {data?data.map((item)=>(
            <div className=" max-w-80  h-44  rounded-xl object-cover  projects1" key = {item.name}>
            <div className=" h-44 w-80 text-white font-bold text-2xl  " id = {item.name}>
            
            <div className="flex justify-center mt-5"><Link to = "/Project"><i class="fa-solid fa-up-right-and-down-left-from-center text-white"></i></Link></div>
            <div className="flex justify-center">{item.name}</div>
          

            </div>
            <img src = {item.img[1]} className="h-full w-full rounded-xl"  onMouseOver={()=>product(item.name)} onMouseOut={()=>product1(item.name)}/>
           </div>

        )):''}
        
        

        </div>


        </div>
        

        </div>
        </div>
        
     
        </>
    )
}
export default Vlog;