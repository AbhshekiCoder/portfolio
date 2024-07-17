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
            name: 'foody',
            img: ['https://firebasestorage.googleapis.com/v0/b/portolioproject-85b16.appspot.com/o/projects%2Ffoody%2F127.0.0.1_foodapp_index.php%20-%20Google%20Chrome%202023-06-07%2012-21-57.mp4?alt=media&token=66c09325-80bd-46d8-bbff-77dfe45f256f']
        }).then(()=>{
            alert('successfully updated');
        })
        const dataref = ref(db, 'projects/');
        const snapshot = await get(dataref);
       
            console.log(Object.values(snapshot.val()));
      

    }
     
    
    useEffect(async()=>{
        const listall = ref(storage, 'projects/cocoons');
      
        const img = await listAll(listall);
        const urls = await Promise.all(
            img.items.map((item) => getDownloadURL(item))
          );
          console.log(urls);
         

    },[])
    
    
    
   
    return(
        <>
         <div className = "border">
            <form   encType="multipart/form-data">
                <input type = "file" onChange={data}/>
            </form>
        
        </div>
        <button onClick={btn}>click</button>
     
       
       
    
     


        </>
    )
}
export default Admin;