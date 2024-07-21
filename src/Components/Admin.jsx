import { uploadBytes,  getDownloadURL, listAll } from 'firebase/storage';
//import { storage } from './Firebase';
import { useState } from 'react';
import {app, storage} from './Firebase';
import { useEffect } from 'react';
import {get, push, set, getDatabase, ref} from 'firebase/database';


function Admin(){
    const [url, setURL] = useState('');

    let data = async(e)=>{
    /** 
        const file = e.target.files[0];
      //  let db = getDatabase(app);
      //  const newref = push(ref(db, 'profile/'));
    
        const imageref = ref(storage, `projects/foody/${file.name}`);
      
        
      /**   set(newref, {
            name: 'snkd',
            img: file
        }).then(()=>{
            alert('successfully updated');
        })
        const dataref = ref(db, 'profile/');
        const snapshot = await get(dataref);
       
            console.log(Object.values(snapshot.val()));
        */
       /** 
      await getDownloadURL(imageref).then((url1)=>{
        console.log(url1)
        setURL(url1)
       }).catch((err)=>{
        switch (err.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break;
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
      
            // ...
      
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;
          }
       })
      */

    }
    
    let btn = async()=>{
        let db = getDatabase(app);
        const newref = push(ref(db, 'projects/'));
        set(newref, {
            name: 'linked clone',
            img: ['https://firebasestorage.googleapis.com/v0/b/portolioproject-85b16.appspot.com/o/projects%2Flinkedin%2F127.0.0.1_5500_likuioinfgfj.html%20-%20Google%20Chrome%202023-12-16%2023-24-08.mp4?alt=media&token=269048b6-fedc-4611-a39f-2f80e154e4bd']
        }).then(()=>{
            alert('successfully updated');
        })
        const dataref = ref(db, 'projects/');
        const snapshot = await get(dataref);
        setURL(Object.values(snapshot.val()));
       
            console.log(Object.values(snapshot.val()));
      

    }
      /** 
            
     const db = async()=>{
      const listall = ref(storage, 'projects/pglife');
      
        const img = await listAll(listall);
        const urls = await Promise.all(
            img.items.map((item) => getDownloadURL(item))
          );
          console.log(urls);
         

     }
    
    useEffect(()=>{
      db()
    })
      */
    
    
   
    return(
        <>
         <div className = "border">
            <form   encType="multipart/form-data">
                <input type = "file" onChange={data}/>
            </form>
        
        </div>
       <button onClick={btn}>
       btn

       </button>
       <div>
        {url?url.map((item)=>(
          <div>{item}</div>

        )): ''}
       </div>
       
       
    
     


        </>
    )
}
export default Admin;