import { Grid, Button } from '@chakra-ui/react'
import { storage } from '../../../configs/firebaseConfig';
import React, { useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { ref, uploadBytes } from 'firebase/storage';

function UploadImages() {

  const [selectedFileList, setSelectedFileList] =useState([]);

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

  const UploadImages=()=>{
    selectedFileList.forEach((file)=>{
      const fileName=Date.now()+'.jpeg';
      const storageRef=ref(storage, 'car-listing/'+fileName);
      const metaData={
        contentType: 'image/jpeg'
      }
      uploadBytes(storageRef, file, metaData).then((snapShot)=>{
        console.log('Uploaded File')
      })
    });
   
  }
  return (
    <div>
        <h2 style={{fontWeight: 'bold', padding: '10px'}}>Upload Car Images</h2>
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        {selectedFileList.map((image,index)=>(
          <div key={index}>
            <IoCloseCircle style={{position: 'relative', padding: '3px', margin: '2px', width: '52px', height: '25px'}} onClick={()=>onRemoveImage(image,index)}/>
            <img src={URL.createObjectURL(image)} style={{width: '100%', height:'130px'}}/>
          </div>
        ))}
        <label htmlFor='upload-images'>
            <div style={{display: 'flex', justifyContent: 'center', borderRadius: '12px', borderWidth: '0.1px', background: '#ADD8E6', padding:'10px', borderStyle: 'dotted', alignContent: 'center', maxWidth: '200px', maxHeight: '300px'}}><h2 style={{justifyContent: 'center'}}>+</h2></div>
        </label>
        <input type='file' multiple={true} id='upload-images' style={{opacity:0}} onChange={onFileSelected}/>
        <div className='flex flex-col items-center justify-center'></div>
      </Grid>
      <Button onClick={UploadImages}>Upload Image</Button>
    </div>
  )
}

export default UploadImages
