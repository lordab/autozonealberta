import { Grid, Button } from '@chakra-ui/react'
import { storage } from '../../../configs/firebaseConfig';
import React, { useEffect, useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { CarImages, CarListing } from '../../../configs/schema';
import { db } from '../../../configs/index'

function UploadImages({triggerUploadImages, setLoader}) {

  const [selectedFileList, setSelectedFileList] =useState([]);
  
  useEffect(()=>{
    if (triggerUploadImages) {
      UploadImagesToServer();
    }
  }, [triggerUploadImages])
  
  const onRemoveImage=(image,index)=>{
    const result = selectedFileList.filter((item)=>item!=image);
    setSelectedFileList(result);
  }
  
  const onFileSelected=(event)=>{
    const files = event.target.files;
    console.log(
      'Files', files
    )
    for(let i=0; i< files?.length; i++){
      const file= files[i];
      setSelectedFileList((prev)=>[...prev,file])
    }
  }

  const UploadImagesToServer=async()=>{
    setLoader(true);
    selectedFileList.forEach(async(file)=>{
      const fileName=Date.now()+'.jpeg';
      const storageRef=ref(storage, 'car-listing/'+fileName);
      const metaData={
        contentType: 'image/jpeg'
      }
      await uploadBytes(storageRef, file, metaData).then((snapShot)=>{
        console.log('Uploaded File')
      }).then(resp => {
        getDownloadURL(storageRef).then(async(downloadUrl) => {
          console.log(downloadUrl);
          if(downloadUrl) {
            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggerUploadImages
            })
            setLoader(false);
          }
        })
        
      })
      
    });
   
  }
  return (
    <div>
        <h2 style={{fontWeight: 'bold', padding: '10px'}}>Upload Car Images</h2>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {selectedFileList.map((image,index)=>(
          <div key={index}>
            <IoCloseCircle style={{position: 'absolute', margin: 0, padding: 0, width: '50px', color:'#DCDCDC', height: '25px'}} onClick={()=>onRemoveImage(image,index)}/>
            <img src={URL.createObjectURL(image)} style={{width: '80%', height:'130px'}}/>
          </div>
        ))}
        <label htmlFor='upload-images'>
            <div style={{display: 'flex', justifyContent: 'center', borderRadius: '12px', borderWidth: '0.1px', background: '#ADD8E6', padding:'10px', borderStyle: 'dotted', width: '100%', height: '140px'}}><h2 style={{justifyContent: 'center', marginTop:'12%'}}>+</h2></div>
        </label>
        <input type='file' multiple={true} id='upload-images' style={{opacity:0}} onChange={onFileSelected}/>
        <div className='flex flex-col items-center justify-center'></div>
      </Grid>
    </div>
  )
}

export default UploadImages
