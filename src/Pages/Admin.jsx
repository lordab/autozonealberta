"use server"
import React, { useState } from 'react'
import { VStack, Text, Input, Grid, Button } from '@chakra-ui/react'
import './Admin.css';
import carDetails from '../Shared/carDetails.json'
import InputField from '../components/ui/Input';
import UploadImages from '../components/ui/UploadImages';
import { CarListing } from '../../configs/schema';
import {db} from '../../configs/index'


export default function Admin() {
const[formData, setFormData] = useState([]);
const [triggerUploadImages, setTriggerUploadImages]= useState([]);
const [loader, setLoader] =useState(false);

const handleInputChange = (name, value)=>{
setFormData((prevData)=>({
    ...prevData,
    [name]: value
}))

}
 const resetForm = ()=>{
    console.log('setform')
    setFormData([])
 }
const onSubmit = async(e) => {
    
    e.preventDefault();
    console.log('FormData', formData);

    try{
        setLoader(true);
        const result = await db.insert(CarListing).values({
            ...formData,
        }).returning({id: CarListing.id})
        if (result) {
            console.log("DATA SAVED", result)
            setTriggerUploadImages(result[0]?.id);
            setLoader(false);
            console.log('reset');
        }
    }catch (e) {
        console.log("Error", e)
    }
}
  return (
    <div className='admin-container'>
      <div className='add-listing-heading'>Add New Listing</div>
      <form id='car-detail-form'>
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
            {carDetails.carDetails.map((item, index)=>(
                <div key={index}>
                    <label style={{fontSize: 'medium'}}>{item?.label}</label>
                    {item.fieldtype=="text"||item.fieldtype=="number"?<InputField item={item} handleInputChange={handleInputChange}/>:null}
                </div>
            )
            )}
        </Grid>
        <UploadImages triggerUploadImages={triggerUploadImages} setLoader={resetForm}/>
        <Button 
        type='submit'
        isLoading={loader}
        onClick={(e)=>onSubmit(e)}
        marginTop='32px'
        width='100px'
        size='lg'
        colorScheme='red'>
        Submit
        </Button>
      </form>
    </div>
  )
}
