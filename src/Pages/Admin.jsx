import React, { useState } from 'react'
import { VStack, Text, Input, Grid, Button } from '@chakra-ui/react'
import './Admin.css';
import carDetails from '../Shared/carDetails.json'
import InputField from '../components/ui/Input';
import UploadImages from '../components/ui/UploadImages';

export default function Admin() {
const[formData, setFormData]=useState([]);

const handleInputChange=(name, value)=>{
setFormData((prevData)=>({
    ...prevData,
    [name]: value
}))

}

const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
}
  return (
    <div className='admin-container'>
      <div className='add-listing-heading'>Add New Listing</div>
      <form>
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
            {carDetails.carDetails.map((item, index)=>(
                <div key={index}>
                    <label style={{fontSize: 'medium'}}>{item?.label}</label>
                    {item.fieldtype=="text"||item.fieldtype=="number"?<InputField item={item} handleInputChange={handleInputChange}/>:null}
                </div>
            )
            )}
        </Grid>
        <UploadImages/>
        <Button type='submit' onClick={(e)=>onSubmit(e)} marginTop='32px' width='100px' size='lg' colorScheme='red'>Submit</Button>
      </form>
    </div>
  )
}
