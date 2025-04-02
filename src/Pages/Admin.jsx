"use server"
import React, { useState } from 'react'
import { Input, Grid, Button } from '@chakra-ui/react'
import './Admin.css';
import carDetails from '../Shared/carDetails.json'
import InputField from '../components/ui/Input';
import UploadImages from '../components/ui/UploadImages';
import { CarListing } from '../../configs/schema';
import {db} from '../../configs/index'
import { useForm } from 'react-hook-form';


export default function Admin() {

const {handleSubmit, register, formState, reset} = useForm();
const {isSubmitting} = formState
const [triggerUploadImages, setTriggerUploadImages]= useState([]);


const onSubmit = async(data) => {
    
    console.log('FormData', data);

    try{
        const result = await db.insert(CarListing).values({
            ...data,
        }).returning({id: CarListing.id})
        if (result) {
            setTriggerUploadImages(result[0]?.id);
        }
        reset();
    }catch (e) {
        console.log("Error", e)
    }
}

  return (
    <div className='admin-container'>
      <div className='add-listing-heading'>Add New Listing Test</div>
      <form id='car-detail-form' onSubmit={handleSubmit(onSubmit)}>
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
            {carDetails.carDetails.map((item, index)=>(
                <div key={index}>
                    <label style={{fontSize: 'medium'}}>{item?.label}</label>
                    {item.fieldtype=="text"||item.fieldtype=="number"?<Input {...register(item?.name)} />:null}
                </div>
            )
            )}
        </Grid>
        <UploadImages triggerUploadImages={triggerUploadImages}/>
        <Button 
        type='submit'
        isLoading={isSubmitting}
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
